<script setup>
import { useVuePlayer } from '../../utils/context'
const { percentagePlayed, seekToPercentage } = useVuePlayer()
</script>

<template>
    <div class="vue-player__video-track">
        <input type="range" min="0" max="100" step="1" :value="percentagePlayed.toFixed(1)"
            @input="(e) => seekToPercentage(e.target.value)" />
    </div>
</template>

<style scoped>
.vue-player__video-track {
    padding: 0 0 10px;
    position: absolute;
    bottom: 0px;
    left: 10px;
    width: 70%;
    height: 25px;
    display: flex;
    align-items: center;
}

.vue-player__video-track input[type="range"] {
    position: relative;
    overflow: hidden;
    width: 100%;
    -webkit-appearance: none;
    background-color: white;
    border-radius: 5px;
    color: black;
}

.vue-player__video-track input[type="range"]:focus {
    outline: none;
}

.vue-player__video-track input[type="range"]::-webkit-slider-runnable-track {
    height: 6px;
    -webkit-appearance: none;
    color: black;

}

.vue-player__video-track input[type="range"]::-webkit-slider-thumb {
    width: 6px;
    -webkit-appearance: none;
    height: 6px;
    cursor: ew-resize;
    background: black;
    box-shadow: -245px 0 0 245px black;
}
</style>