import { ref } from 'vue'

export function usePlayer(playerRef, props) {
    const playing = ref(false);
    const duration = ref(0);
    const percentagePlayed = ref(0);
    const videoMuted = ref(props.muted)
    const time = ref(0);

    const events = [
        "play",
        "pause",
        "ended",
        "loadeddata",
        "waiting",
        "playing",
        "timeupdate",
        "canplay",
        "canplaythrough",
        "statechanged",
    ];

    const play = () => {
        playerRef.value.play()
        playing.value = true
    }

    const pause = () => {
        playerRef.value.pause()
        playing.value = false
    }

    const togglePlay = () => {
        if (playing.value) {
            pause()
        } else {
            play()
        }
    }

    const toggleMute = () => {
        if (videoMuted.value) {
            setMuted(false)
        } else {
            setMuted(true)
        }
    }

    const setMuted = (state) => {
        playerRef.value.muted = state
        videoMuted.value = state
    }

    const seekToPercentage = (percentage) => {
        playerRef.value.currentTime = (percentage / 100) * duration.value;
    }

    const convertTimeToDuration = (seconds) => {
        return [Math.floor((seconds / 60) % 60), Math.floor(seconds % 60)]
            .map(num => num.toString().padStart(2, "0"))
            .join(":");
    }

    const openFullScreen = () => {
        if (playerRef.value.requestFullscreen) {
            playerRef.value.requestFullscreen();
        } else if (playerRef.value.webkitRequestFullscreen) {
            playerRef.value.webkitRequestFullscreen();
        } else if (playerRef.value.msRequestFullscreen) {
            playerRef.value.msRequestFullscreen();
        }
    }

    const togglePictureInPicture = () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
            playerRef.value.requestPictureInPicture();
        }
    }

    const bindEvents = (events, emit) => {
        events.forEach((customEvent) => {
            playerRef.value.addEventListener(customEvent, (event) => {
                switch (customEvent) {
                    case "canplay":
                        duration.value = playerRef.value.duration
                        break;
                    case "timeupdate":
                        percentagePlayed.value = (playerRef.value.currentTime / playerRef.value.duration) * 100;
                        time.value = playerRef.value.currentTime;
                        break;
                }
                emit(customEvent, { event })
            }, true)

        });
    }

    return {
        events,
        playing,
        videoMuted,
        duration,
        percentagePlayed,
        time,
        play,
        pause,
        togglePlay,
        toggleMute,
        seekToPercentage,
        convertTimeToDuration,
        openFullScreen,
        togglePictureInPicture,
        bindEvents,
    }
}