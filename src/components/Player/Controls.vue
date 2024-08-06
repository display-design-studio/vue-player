<script setup>
import { useVuePlayer } from '@display-studio/vue-player'
const { playing, togglePlay, toggleMute, videoMuted } = useVuePlayer()
</script>

<template>
  <div class="vue-player__controls">
    <button @click="togglePlay()" class="vue-player__controls-toggleplay">
      <img v-if="playing" src="../../assets/pause.svg" alt="">
      <img v-else src="../../assets/play.svg" alt="">
    </button>
    <button @click="toggleMute()" class="vue-player__controls-togglemute">
      <img v-if="videoMuted" src="../../assets/mute.svg" alt="">
      <img v-else src="../../assets/unmute.svg" alt="">
    </button>
  </div>
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
  display: block;
  background-color: white;
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;


  &:deep(img) {
    width: 15px;
    height: 15px;
  }

}
</style>
