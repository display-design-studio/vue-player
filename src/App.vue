<script setup>
import VuePlayer from './components/VuePlayer.vue'
import MyControls from './components/MyControls.vue'
import MySvgControls from './components/MySvgControls.vue'
import './assets/reset.css'

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
    <h1 class="title">display vue-player</h1>
    <div class="container">
      <VuePlayer ref="playerRef" src="https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/dog.mp4"
        poster="https://demo-res.cloudinary.com/video/upload/q_auto,f_auto,w_500/dog.jpg" :showPlayerDuration="true"
        :showPlayerTrack="true" :muted="true" :autoplay="false" :controls="false" :loop="true" @play="onPlayerPlay"
        @pause="onPlayerPause" @ended="onPlayerEnded" @loadeddata="onPlayerLoadeddata" @waiting="onPlayerWaiting"
        @playing="onPlayerPlaying" @timeupdate="onPlayerTimeupdate" @canplay="onPlayerCanplay"
        @canplaythrough="onPlayerCanplaythrough" @statechanged="playerStateChanged">
        <!-- <MyControls /> -->
        <MySvgControls />
      </VuePlayer>
    </div>
  </main>
</template>

<style>
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
  width: 60%;
  margin: 100px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
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

  p {
    display: inline-block;
    line-height: 100%;
  }
}

.vue-player__current-time {
  color: royalblue;
}

.vue-player__separator {
  color: royalblue;

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
  box-shadow: -245px 0 0 245px black;
}
</style>