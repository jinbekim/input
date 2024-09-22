<template>
  <div style="display: inline;">
    <input v-model="value" name="VueInput" id="VueInput" @input="onInput"
    autocomplete="off"
    >
    <span> value: {{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const onInput = (e: Event) => {
  value.value = (e.target as HTMLInputElement).value + '!'
}

</script>

<style scoped>
</style>
