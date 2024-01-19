<script setup>
import VideoPlayer from "./components/VideoPlayer.vue";
import VideoPlayerTrack from "./components/VideoPlayerTrack.vue";

import { ref } from "vue";

const time = ref(0);

const onPlayerPlay = ({ event, player }) => {
  console.log(event.type);
  player.setPlaying(true);
};
const onPlayerPause = ({ event, player }) => {
  console.log(event.type);
  player.setPlaying(false);
};
const onPlayerEnded = ({ event, player }) => {
  console.log(event.type);
  player.setPlaying(false);
};
const onPlayerLoadeddata = ({ event }) => {
  console.log(event.type);
};
const onPlayerWaiting = ({ event }) => {
  console.log(event.type);
};
const onPlayerPlaying = ({ event }) => {
  console.log(event.type);
};
const onPlayerTimeupdate = ({ event }) => {
  time.value = event.target.currentTime;
  console.log({ event: event.type, time: event.target.currentTime });
};
const onPlayerCanplay = ({ event }) => {
  console.log(event.type);
};
const onPlayerCanplaythrough = ({ event }) => {
  console.log(event.type);
};
const playerStateChanged = ({ event }) => {
  console.log(event.type);
};
</script>

<template>
  <div class="app">
    <VideoPlayer class="vue3-player" src="https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/dog.mp4"
      :muted="false" :autoplay="false" :controls="true" :loop="false"
      poster="https://demo-res.cloudinary.com/video/upload/q_auto,f_auto,w_500/dog.jpg" @play="onPlayerPlay"
      @pause="onPlayerPause" @ended="onPlayerEnded" @loadeddata="onPlayerLoadeddata" @waiting="onPlayerWaiting"
      @playing="onPlayerPlaying" @timeupdate="onPlayerTimeupdate" @canplay="onPlayerCanplay"
      @canplaythrough="onPlayerCanplaythrough" @statechanged="playerStateChanged">
      <template v-slot:controls="{
        togglePlay,
        playing,
        percentagePlayed,
        seekToPercentage,
        duration,
        convertTimeToDuration,
        videoMuted,
        toggleMute,
      }">
        <div class="vue3-player__controls">
          <button @click="togglePlay()" class="vue3-player__controls-toggleplay">
            {{ playing ? "pause" : "play" }}
          </button>
          <div class="vue3-player__controls-time">
            {{ convertTimeToDuration(time) }} /
            {{ convertTimeToDuration(duration) }}
          </div>
          <VideoPlayerTrack :percentage="percentagePlayed" @seek="seekToPercentage" class="vue3-player__controls-track" />
          <button @click="toggleMute()" class="vue3-player__controls-togglemute">
            {{ videoMuted ? "unmute" : "mute" }}
          </button>
        </div>
      </template>
    </VideoPlayer>
  </div>
</template>

<style>
/* video::-webkit-media-controls {
  display: none;
} */

.vue3-player {
  width: 100%;
}

.vue3-player__controls {
  display: flex;
  font: 0.8em sans-serif;
  width: 100%;
}

.vue3-player__controls-toggleplay,
.vue3-player__controls-togglemute {
  flex: 1;
}

.vue3-player__controls-time {
  flex: 2;
  text-align: center;
  line-height: 2;
}

.vue3-player__controls-track {
  flex: 5;
  line-height: 2;
}

/* Player Track */
.vue3-player__video-track input[type="range"] {
  position: relative;
  top: -1px;
  overflow: hidden;
  width: 245px;
  -webkit-appearance: none;
  background-color: #ccc;
  border-radius: 5px;
}

.vue3-player__video-track input[type="range"]:focus {
  outline: none;
}

.vue3-player__video-track input[type="range"]::-webkit-slider-runnable-track {
  height: 8px;
  -webkit-appearance: none;
  color: #333;
  margin-top: -1px;
}

.vue3-player__video-track input[type="range"]::-webkit-slider-thumb {
  width: 8px;
  -webkit-appearance: none;
  height: 8px;
  cursor: ew-resize;
  background: #333;
  box-shadow: -245px 0 0 245px #333;
}
</style>
