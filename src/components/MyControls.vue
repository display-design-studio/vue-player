<script setup>
import { useVuePlayer } from '../utils/context.js'

const { togglePlay, playing, toggleMute, videoMuted } = useVuePlayer()
// const player = useVuePlayer()

</script>

<template>
  <div class="vue-player__controls">
    <button @click="togglePlay()" class="vue-player__controls-toggleplay">
      {{ playing ? "pause" : "play" }}
    </button>
    <button @click="toggleMute()" class="vue-player__controls-togglemute">
      {{ videoMuted ? "unmute" : "mute" }}
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
  flex: 0 0 auto;
  display: block;
  background-color: white;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 2px 5px;

}
</style>