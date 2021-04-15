<template>
  <TheAppHeader />
  <TheHelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import TheAppHeader from './_common/TheAppHeader/TheAppHeader.vue'
import TheHelloWorld from './_common/TheHelloWorld/TheHelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
