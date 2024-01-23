<script setup lang="ts">
defineProps({
    time: { type: Number, required: true },
    duration: { type: Number, required: true },
})

const convertTimeToDuration = (seconds: number): string => {
    return [Math.floor((seconds / 60) % 60), Math.floor(seconds % 60)]
        .map(num => num.toString().padStart(2, "0"))
        .join(":");
}
</script>

<template>
    <div class="vue-player__timestamp">
        <div class="vue-player__timestamp-inner">
            <p class="vue-player__current-time">{{ convertTimeToDuration(time) }}</p>
            <p class="vue-player__separator">/</p>
            <p class="vue-player__duration">{{ convertTimeToDuration(duration) }}</p>
        </div>
    </div>
</template>