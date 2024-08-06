<script setup>
import { VuePlayer } from '@display-studio/vue-player'
import Controls from './Controls.vue'

const sources = [
    {
        src: './video.mp4',
        type: 'video/mp4',
    }
]
</script>

<template>
    <VuePlayer class="vue-player" :sources="sources" :autoplay="false" :togglePlayOnClick="true" :loop="true">
        <Controls />
    </VuePlayer>
</template>

<style scoped>
.vue-player {
    width: 100%;
    position: relative;
    height: fit-content;
    line-height: 0;

    &:deep(video) {
        width: 100%;
        height: auto;
        cursor: pointer;
    }
}
</style>