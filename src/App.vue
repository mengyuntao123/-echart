<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Re from "../static/rem"
export default {
  name: 'App',
  mounted(){
    // Re.recRem();
    // window.onresize=Re.recRem;
  },
  methods:{
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  /* min-width: 1366px; */
  overflow-y: auto;
  overflow-x: hidden;
  background: #121415;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
