<script>
const EVENTS = [
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

export default {
    name: "VideoPlayer",
    props: {
        src: { type: String, required: true },
        controls: { type: Boolean, required: false, default: false },
        loop: { type: Boolean, required: false, default: false },
        width: { type: Number, required: false, default: 500 },
        height: { type: Number, required: false, default: 281 },
        autoplay: { type: Boolean, required: false, default: false },
        muted: { type: Boolean, required: false, default: false },
        poster: { type: String, required: false },
        preload: { type: String, required: false, default: "auto" },
    },
    data() {
        return {
            playing: false,
            duration: 0,
            percentagePlayed: 0,
            videoMuted: false,
        };
    },
    mounted() {
        this.bindEvents();

        if (this.$refs.player.muted) {
            this.setMuted(true);
        }
    },
    methods: {
        bindEvents() {
            EVENTS.forEach((event) => {
                this.bindVideoEvent(event);
            });
        },

        bindVideoEvent(which) {
            const player = this.$refs.player;

            player.addEventListener(
                which,
                (event) => {
                    if (which === "loadeddata") {
                        this.duration = player.duration;
                    }

                    if (which === "timeupdate") {
                        this.percentagePlayed =
                            (player.currentTime / player.duration) * 100;
                    }

                    this.$emit(which, { event, player: this });
                },
                true
            );
        },

        play() {
            this.$refs.player.play();
            this.setPlaying(true);
        },

        pause() {
            this.$refs.player.pause();
            this.setPlaying(false);
        },

        togglePlay() {
            if (this.playing) {
                this.pause();
            } else {
                this.play();
            }
        },

        setPlaying(state) {
            this.playing = state;
        },

        seekToPercentage(percentage) {
            this.$refs.player.currentTime = (percentage / 100) * this.duration;
        },

        convertTimeToDuration(seconds) {
            return [parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)]
                .join(":")
                .replace(/\b(\d)\b/g, "0$1");
        },

        mute() {
            this.$refs.player.muted = true;
            this.setMuted(true);
        },

        unmute() {
            this.$refs.player.muted = false;
            this.setMuted(false);
        },

        toggleMute() {
            if (this.videoMuted) {
                this.unmute();
            } else {
                this.mute();
            }
        },

        setMuted(state) {
            this.videoMuted = state;
        },
    },
};
</script>

<template>
    <div class="vue3-player__wrapper">
        <video :src="src" :muted="muted" :autoplay="autoplay" :controls="controls" :loop="loop" :width="width"
            :height="height" :poster="poster" :preload="preload" :playsinline="true" ref="player" />
        <slot name="controls" :play="play" :pause="pause" :toggle-play="togglePlay" :playing="playing"
            :percentage-played="percentagePlayed" :seek-to-percentage="seekToPercentage" :duration="duration"
            :convert-time-to-duration="convertTimeToDuration" :video-muted="videoMuted" :toggle-mute="toggleMute"></slot>
    </div>
</template>