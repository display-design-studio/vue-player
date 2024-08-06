import { reactive, toRefs } from 'vue'

export function usePlayer(playerRef, props) {
    const player = reactive({
        playing: false,
        duration: 0,
        percentagePlayed: 0,
        videoMuted: props.muted,
        time: 0
    })

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
        player.playing = true
    }

    const pause = () => {
        playerRef.value.pause()
        player.playing = false
    }

    const togglePlay = () => {
        if (player.playing) {
            pause()
        } else {
            play()
        }
    }

    const toggleMute = () => {
        if (player.videoMuted) {
            setMuted(false)
        } else {
            setMuted(true)
        }
    }

    const setMuted = (state) => {
        playerRef.value.muted = state
        player.videoMuted = state
    }

    const seekToPercentage = (percentage) => {
        playerRef.value.currentTime = (percentage / 100) * player.duration;
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
                        player.duration = playerRef.value.duration
                        break;
                    case "timeupdate":
                        player.percentagePlayed = (playerRef.value.currentTime / playerRef.value.duration) * 100;
                        player.time = playerRef.value.currentTime;
                        break;
                }
                emit(customEvent, { event })
            }, true)

        });
    }

    return {
        ...toRefs(player),
        events,
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