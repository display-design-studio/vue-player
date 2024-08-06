<script setup>
import { useVuePlayer } from '@display-studio/vue-player'
const player = useVuePlayer()

defineProps({
    controlsVisible: Boolean
})

</script>

<template>
    <Transition v-show="!player.playing || controlsVisible">
        <button @click="player.togglePlay()" class="vue-player__controls-toggleplay">
            <img v-if="player.playing" src="../../assets/pause.svg" alt="" loading="lazy">
            <img v-else src="../../assets/play.svg" alt="" loading="lazy">
        </button>
    </Transition>
</template>


<style scoped>
.vue-player__controls {
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: flex;
    width: fit-content;
    gap: 10px;
    padding: 10px;
}


.vue-player__controls-toggleplay,
.vue-player__controls-togglemute {
    background-color: white;
    border: none;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;

    &:deep(img) {
        width: 15px;
        height: 15px;
    }
}
</style>
