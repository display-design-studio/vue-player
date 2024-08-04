<script setup>
import { ref, onMounted, provide, defineEmits } from 'vue'
import { usePlayer } from '../composables/usePlayer.js'

const props = defineProps({
    controls: { type: Boolean, required: false, default: false },
    loop: { type: Boolean, required: false, default: false },
    width: { type: Number, required: false },
    height: { type: Number, required: false },
    autoplay: { type: Boolean, required: false, default: false },
    muted: { type: Boolean, required: false, default: false },
    poster: { type: String, required: false },
    preload: { type: String, required: false, default: "auto" },
    sources: { type: Array, required: true },
    togglePlayOnClick: { type: Boolean, required: false, default: false }
})

const playerRef = ref(null)

const {
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
    bindEvents
} = usePlayer(playerRef, props)

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
    "statechanged"
])

onMounted(() => {
    bindEvents(events, emit)
})

provide('vue-player', {
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
})
</script>

<template>
    <div>
        <video ref="playerRef" :muted="muted" :autoplay="autoplay" :controls="controls" :loop="loop" :width="width"
            :height="height" :poster="poster" :preload="preload" :playsinline="true"
            @click="togglePlayOnClick && togglePlay()">
            <source v-for="(source, i) in sources" :key="i" :src="source.src" :media="source.media"
                :type="source.type" />
        </video>
        <slot />
    </div>
</template>