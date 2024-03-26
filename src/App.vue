<script setup>
import { VuePlayer } from '@display-studio/vue-player'
import MyPlayerDuration from './components/MyPlayerDuration.vue'
import MyPlayerTrack from './components/MyPlayerTrack.vue'
import MySvgControls from './components/MySvgControls.vue'
import * as dat from 'dat.gui';
import { onMounted, reactive } from 'vue';

const player = reactive({
  sources: [{ src: 'https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/dog.mp4', type: 'video/mp4' }],
  poster: 'https://demo-res.cloudinary.com/video/upload/q_auto,f_auto,w_500/dog.jpg',
  controls: false,
  togglePlayOnClick: true,
  myControls: true,
  showPlayerDuration: false,
  showPlayerTrack: false,
})

onMounted(() => {
  const gui = new dat.GUI();
  gui.add(player, 'controls')
  gui.add(player, 'togglePlayOnClick')
  gui.add(player, 'myControls')
  gui.add(player, 'showPlayerDuration')
  gui.add(player, 'showPlayerTrack')
})
</script>

<template>
  <main class="app">
    <div class="container">
      <VuePlayer class="vue-player" :sources="player.sources" :toggle :poster="player.poster"
        :autoplay="player.autoplay" :controls="player.controls" :togglePlayOnClick="player.togglePlayOnClick">
        <MyPlayerDuration v-if="player.showPlayerDuration" />
        <MyPlayerTrack v-if="player.showPlayerTrack" />
        <MySvgControls v-if="player.myControls" />
      </VuePlayer>
    </div>
  </main>
</template>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
}

.app .title {
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 60px;
}

.container {
  width: 60%;
  margin: 100px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;

  @media (max-width: 1024px) {
    width: 100%;
  }
}

.vue-player {
  width: 100%;
  position: relative;
  height: fit-content;
  line-height: 0;

  video {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
}

/* Player Timestamp */
.vue-player__timestamp {
  flex: 2;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 10px;
}

.vue-player__timestamp-inner {
  background-color: white;
  border-radius: 5px;
  padding: 2px 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  user-select: none;
  display: flex;
  gap: 5px;

  p {
    display: inline-block;
    line-height: 100%;
  }
}

.vue-player__current-time {
  color: black;
}

.vue-player__separator {
  color: black;

}

.vue-player__duration {
  font-weight: bold;
  color: black;
}


/* Player Track */
.vue-player__video-track {
  padding: 0 0 10px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
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
  box-shadow: -100vw 0 0 100vw black;
}
</style>