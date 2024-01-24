<script setup>
import { useVuePlayer } from '../../utils/context'
import Mute from './Mute.vue'
import Unmute from './Unmute.vue'
import Play from './Play.vue'
import Pause from './Pause.vue'

const player = useVuePlayer()
</script>

<template>
  <div class="vue-player__controls">
    <button @click="player.togglePlay()" class="vue-player__controls-toggleplay">
      <Pause v-if="player.playing" />
      <Play v-else />
    </button>
    <button @click="player.toggleMute()" class="vue-player__controls-togglemute">
      <Unmute v-if="player.videoMuted" />
      <Mute v-else />
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
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

}
</style>
