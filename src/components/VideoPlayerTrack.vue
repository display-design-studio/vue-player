<script setup lang="ts">
defineProps({
    percentage: { type: Number, required: true }
})
</script>


<template>
    <div class="vue3-player__video-track">
        <input type="range" min="0" max="100" step="1" :value="percentage.toFixed(1)" @input="$emit('seek')" />
    </div>
</template>
