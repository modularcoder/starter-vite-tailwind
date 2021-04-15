<template>
  <h1>{{ msg }}</h1>

  <button @click="handleCountClick">count is: {{ count }}</button>
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
const count = ref(0)

const handleCountClick = () => {
  count.value++
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
