<script setup>
import './assets/reset.css'
import VuePlayer from './components/VuePlayer.vue'
import MyPlayerDuration from './components/custom/MyPlayerDuration.vue';
import MyPlayerTrack from "./components/custom/MyPlayerTrack.vue";
import MySvgControls from './components/custom/MySvgControls.vue'

const sources = [
  {
    src: 'https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/dog.mp4',
    type: 'video/mp4',
    media: "(min-width: 900px)"
  },
  {
    src: 'https://player.vimeo.com/progressive_redirect/playback/895761990/rendition/1080p/file.mp4?loc=external&log_user=0&signature=da459b352a4493914c2583edc8745b0d6b18248b751a19905c4cc806f10f0a14',
    type: 'video/mp4',
  }
]
</script>

<template>
  <main class="app">
    <div class="container">
      <VuePlayer class="vue-player" :sources="sources"
        poster="https://demo-res.cloudinary.com/video/upload/q_auto,f_auto,w_500/dog.jpg" :muted="true"
        :autoplay="false" :controls="false" :loop="true" :togglePlayOnClick="true">
        <MyPlayerDuration />
        <MyPlayerTrack />
        <MySvgControls />
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

.title {
  width: 100%;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 60px;
}

.container {
  width: 90%;
  margin: 100px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;

  @media (min-width:1024px) {
    width: 50%;
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
  }
}
</style>