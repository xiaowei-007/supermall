<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div>这是我的第一个vue项目</div>
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
</style>
