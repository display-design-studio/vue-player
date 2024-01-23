<script setup>
import VuePlayer from './components/VuePlayer.vue'
import MyControls from './components/MyControls.vue'


const onPlayerPlay = ({ event }) => {
  console.log(event);
};
const onPlayerPause = ({ event }) => {
};
const onPlayerEnded = ({ event }) => {
  // console.log(event.type);
};
const onPlayerLoadeddata = ({ event }) => {
  // console.log(event.type);
};
const onPlayerWaiting = ({ event }) => {
  // console.log(event.type);
};
const onPlayerPlaying = ({ event }) => {
  // console.log(event.type);
};
const onPlayerTimeupdate = ({ event }) => {
  // console.log({ event: event.type, time: event.target.currentTime });
};
const onPlayerCanplay = ({ event }) => {
  // console.log(event.type);
};
const onPlayerCanplaythrough = ({ event }) => {
  // console.log(event.type);
};
const playerStateChanged = ({ event }) => {
  // console.log(event.type);
};

</script>

<template>
  <main class="app">
    <VuePlayer
      src="https://player.vimeo.com/progressive_redirect/playback/874123939/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c35a89bdcb4a936dd64d6c27cdb535f51f4f160ff93b11e060ed6de4b472ef4a"
      poster="https://demo-res.cloudinary.com/video/upload/q_auto,f_auto,w_500/dog.jpg" :showPlayerDuration="true"
      :showPlayerTrack="true" :muted="true" :autoplay="false" :controls="false" :loop="true" @play="onPlayerPlay"
      @pause="onPlayerPause" @ended="onPlayerEnded" @loadeddata="onPlayerLoadeddata" @waiting="onPlayerWaiting"
      @playing="onPlayerPlaying" @timeupdate="onPlayerTimeupdate" @canplay="onPlayerCanplay"
      @canplaythrough="onPlayerCanplaythrough" @statechanged="playerStateChanged">
      <MyControls />
    </VuePlayer>
  </main>
</template>

<style>
/* You can customize the player with prebuilt classes */
.vue-player {
  width: 100%;
}

.vue-player__controls {
  display: flex;
  width: 100%;
}

.vue-player__controls-toggleplay,
.vue-player__controls-togglemute {
  flex: 1;
}

.vue-player__controls-time {
  flex: 2;
  text-align: center;
  line-height: 2;
}

.vue-player__controls-track {
  flex: 5;
  line-height: 2;
}

/* Player Track */
.vue-player__video-track input[type="range"] {
  position: relative;
  top: -1px;
  overflow: hidden;
  width: 245px;
  -webkit-appearance: none;
  background-color: #ccc;
  border-radius: 5px;
}

.vue-player__video-track input[type="range"]:focus {
  outline: none;
}

.vue-player__video-track input[type="range"]::-webkit-slider-runnable-track {
  height: 8px;
  -webkit-appearance: none;
  color: #333;
  margin-top: -1px;
}

.vue-player__video-track input[type="range"]::-webkit-slider-thumb {
  width: 8px;
  -webkit-appearance: none;
  height: 8px;
  cursor: ew-resize;
  background: #333;
  box-shadow: -245px 0 0 245px #333;
}
</style>