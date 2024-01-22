<script setup>
import { inject } from 'vue'

const { togglePlay, toggleMute, playing, videoMuted } = inject('vue-player')
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