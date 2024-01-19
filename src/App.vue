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
      :muted="false" :autoplay="false" :controls="false" :loop="false"
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
/* You can customize the player */
.vue3-player {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* 
.vue3-player__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
}

.vue3-player video {
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
} */
</style>