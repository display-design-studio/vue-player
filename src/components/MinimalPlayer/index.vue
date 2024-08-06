<script setup>
import { ref } from 'vue';
import { VuePlayer } from '@display-studio/vue-player'
import Controls from './Controls.vue'

const sources = [
    {
        src: './video.mp4',
        type: 'video/mp4',
    }
]

const controlsVisible = ref(false)
</script>

<template>
    <VuePlayer @mouseenter="controlsVisible = true" @mouseleave="controlsVisible = false" class="vue-player"
        :sources="sources" :togglePlayOnClick="false" :loop="true">
        <Controls :controlsVisible />
    </VuePlayer>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.vue-player {
    width: 100%;
    position: relative;
    height: fit-content;
    line-height: 0;

    &:deep(video) {
        width: 100%;
        height: auto;
    }
}
</style>