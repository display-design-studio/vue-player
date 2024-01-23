<script setup lang="ts">
defineProps({
    time: { type: Number, required: true },
    duration: { type: Number, required: true },
    separator: { type: String, required: false, default: '/' }
})

const convertTimeToDuration = (seconds: number): string => {
    return [Math.floor((seconds / 60) % 60), Math.floor(seconds % 60)]
        .map(num => num.toString().padStart(2, "0"))
        .join(":");
}
</script>

<template>
    <div class="vue-player__controls-time">
        <span>{{ convertTimeToDuration(time) }}</span>
        <span>{{ separator }}</span>
        <span>{{ convertTimeToDuration(duration) }}</span>
    </div>
</template>