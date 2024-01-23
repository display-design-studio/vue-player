<script setup>
import { useVuePlayer } from '../utils/index.js'

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