<script setup lang="ts">
defineProps({
    percentage: { type: Number, required: true }
})

const emit = defineEmits(['seek'])

const onInput = (event: Event) => {
    emit('seek', (event.target as HTMLInputElement).value)
}
</script>

<template>
    <div class="vue-player__video-track">
        <input type="range" min="0" max="100" step="1" :value="percentage.toFixed(1)" @input="onInput" />
    </div>
</template>
