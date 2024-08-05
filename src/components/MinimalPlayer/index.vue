<script setup>
import { VuePlayer } from '@display-studio/vue-player'
import Controls from './Controls.vue';
import { reactive, ref } from 'vue';

const myPlayer = reactive({
    sources: [{ src: './video.mp4', type: 'video/mp4' }],
    poster: './poster.png',
    controls: false,
    togglePlayOnClick: true,
    myControls: true,
    showPlayerDuration: false,
    showPlayerTrack: false,
})

const controlsVisible = ref(false)
</script>

<template>
    <VuePlayer @mouseenter="controlsVisible = true" @mouseleave="controlsVisible = false" class="vue-player"
        :sources="myPlayer.sources" :toggle :poster="myPlayer.poster" :autoplay="myPlayer.autoplay"
        :controls="myPlayer.controls" :togglePlayOnClick="myPlayer.togglePlayOnClick" :loop="true">
        <Transition>
            <Controls v-show="controlsVisible" />
        </Transition>
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
        cursor: pointer;
    }
}
</style>