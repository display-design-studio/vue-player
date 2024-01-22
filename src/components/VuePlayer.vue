<script setup>
import VuePlayerTrack from "./VuePlayerTrack.vue";
import VuePlayerDuration from './VuePlayerDuration.vue'

import { ref, onMounted, watch, provide } from 'vue'

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

const props = defineProps({
    src: { type: String, required: true },
    controls: { type: Boolean, required: false, default: false },
    loop: { type: Boolean, required: false, default: false },
    width: { type: Number, required: false },
    height: { type: Number, required: false },
    autoplay: { type: Boolean, required: false, default: false },
    muted: { type: Boolean, required: false, default: false },
    poster: { type: String, required: false },
    preload: { type: String, required: false, default: "auto" },
    showPlayerDuration: { type: Boolean, required: false, default: false },
    showPlayerTrack: { type: Boolean, required: false, default: false }
})

const emit = defineEmits([
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
])

const playerRef = ref(null)
const playing = ref(false);
const duration = ref(0);
const percentagePlayed = ref(0);
const videoMuted = ref(props.muted)
const time = ref(0);

const bindEvents = () => {
    EVENTS.forEach((event) => {
        bindVideoEvent(event);
    });
}

const bindVideoEvent = (which) => {
    playerRef.value.addEventListener(which, (event) => {
        if (which === "loadeddata") {
            duration.value = playerRef.value.duration
        }
        if (which === "timeupdate") {
            percentagePlayed.value =
                (playerRef.value.currentTime / playerRef.value.duration) * 100;
            time.value = playerRef.value.currentTime;
        }

        emit(which, { event, player: playerRef.value })
    }, true)
}

const play = () => {
    playerRef.value.play()
    setPlaying(true)
}

const pause = () => {
    playerRef.value.pause()
    setPlaying(false)
}

const togglePlay = () => {
    if (playing.value) {
        pause()
    } else {
        play()
    }
}

const setPlaying = (state) => {
    playing.value = state
}

const seekToPercentage = (percentage) => {
    playerRef.value.currentTime = (percentage / 100) * duration.value;
}


const mute = () => {
    setMuted(true)
}

const unmute = () => {
    setMuted(false)
}

const toggleMute = () => {
    if (videoMuted.value) {
        unmute()
    } else {
        mute()
    }
}
const setMuted = (state) => {
    playerRef.value.muted = state
    videoMuted.value = state
}

onMounted(() => {
    bindEvents()
})


provide('vue-player', {
    togglePlay,
    playing,
    toggleMute,
    videoMuted
})

defineExpose({
    setPlaying,
    setMuted
})
</script>

<template>
    <div class="vue-player">
        <video ref="playerRef" :src="src" :muted="muted" :autoplay="autoplay" :controls="controls" :loop="loop"
            :width="width" :height="height" :poster="poster" :preload="preload" :playsinline="true" />
        <!-- <slot name="controls" :play="play" :pause="pause" :toggle-play="togglePlay" :playing="playing"
            :percentage-played="percentagePlayed" :seek-to-percentage="seekToPercentage" :duration="duration"
            :convert-time-to-duration="convertTimeToDuration" :video-muted="videoMuted" :toggle-mute="toggleMute"></slot> -->

        <slot />

        <VuePlayerDuration v-if="showPlayerDuration" :time="time" :duration="duration" separator="/" />
        <VuePlayerTrack v-if="showPlayerTrack" :percentage="percentagePlayed" @seek="seekToPercentage" />
    </div>
</template>