<script setup lang="ts">
import { useVuePlayer } from '../../utils/context'
const player = useVuePlayer()
</script>

<template>
    <div class="vue-player__timestamp">
        <div class="vue-player__timestamp-inner">
            <p class="vue-player__current-time">{{ player.convertTimeToDuration(player.time) }}</p>
            <p class="vue-player__separator">/</p>
            <p class="vue-player__duration">{{ player.convertTimeToDuration(player.duration) }}</p>
        </div>
    </div>
</template>

<style scoped>
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
</style>