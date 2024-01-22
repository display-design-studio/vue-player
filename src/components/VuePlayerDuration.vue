<script setup>
defineProps({
    time: { type: Number, required: true },
    duration: { type: Number, required: true },
    separator: { type: String, required: false, default: '/' }
})

const convertTimeToDuration = (seconds) => {
    return [parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1");
}
</script>

<template>
    <div class="vue-player__controls-time">
        <span>{{ convertTimeToDuration(time) }}</span>
        <span>{{ separator }}</span>
        <span>{{ convertTimeToDuration(duration) }}</span>
    </div>
</template>