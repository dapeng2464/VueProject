<template>
  <div id="app">
    <img src="./assets/logo.png">
   <!--div>
   <router-link to="/">home</router-link>
   <router-link to="/table">table</router-link>
   </div-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
