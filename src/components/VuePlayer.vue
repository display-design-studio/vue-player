<script setup>
import { ref, onMounted, provide, reactive } from 'vue'

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
    EVENTS.forEach((customEvent) => {
        playerRef.value.addEventListener(customEvent, (event) => {

            if (customEvent == "canplay") {
                duration.value = playerRef.value.duration
            }

            if (customEvent == "timeupdate") {
                percentagePlayed.value =
                    (playerRef.value.currentTime / playerRef.value.duration) * 100;
                time.value = playerRef.value.currentTime;
            }

            emit(customEvent, { event })
        }, true)

    });
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

const convertTimeToDuration = (seconds) => {
    return [Math.floor((seconds / 60) % 60), Math.floor(seconds % 60)]
        .map(num => num.toString().padStart(2, "0"))
        .join(":");
}

onMounted(() => {
    bindEvents()
})

const injectedReactive = reactive({
    togglePlay,
    playing,
    toggleMute,
    videoMuted,
    time,
    duration,
    convertTimeToDuration,
    percentagePlayed,
    seekToPercentage
})

provide('vue-player', injectedReactive)
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