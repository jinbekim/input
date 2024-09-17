<template>
  <input :value="value" name="VueInput" id="VueInput" @input="onInput">
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
