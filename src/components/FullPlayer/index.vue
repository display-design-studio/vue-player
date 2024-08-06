<script setup>
import { VuePlayer } from '@display-studio/vue-player'
import Duration from './Duration.vue'
import Track from './Track.vue'
import Controls from './Controls.vue'
import * as dat from 'dat.gui';
import { onMounted, reactive } from 'vue';

const player = reactive({
    sources: [{ src: './video.mp4', type: 'video/mp4' }],
    // poster: './poster.png',
    controls: false,
    togglePlayOnClick: true,
    myControls: true,
    showPlayerDuration: true,
    showPlayerTrack: true,
})

// onMounted(() => {
//     const gui = new dat.GUI();
//     gui.add(player, 'controls')
//     gui.add(player, 'togglePlayOnClick')
//     gui.add(player, 'myControls')
//     gui.add(player, 'showPlayerDuration')
//     gui.add(player, 'showPlayerTrack')
// })
</script>
<template>
    <VuePlayer class="vue-player" :sources="player.sources" :toggle :poster="player.poster" :autoplay="player.autoplay"
        :controls="player.controls" :togglePlayOnClick="player.togglePlayOnClick" :loop="true">
        <Duration v-if="player.showPlayerDuration" />
        <Track v-if="player.showPlayerTrack" />
        <Controls v-if="player.myControls" />
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