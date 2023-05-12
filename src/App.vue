<script setup lang="ts">
</script>

<template>
  <img src="./assets/vue.svg" class="logo" alt="logo">
  <router-view></router-view>
</template>

<style scoped>
body {
  height: 100%;
  width: 100%;
}
.logo {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  height: 2rem;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
