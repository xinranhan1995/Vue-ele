<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  <!-- <div>

      <router-link to="/Home">Home</router-link>
      <router-link to="/Config">Config</router-link>
  
  </div> -->
 <index></index>
   <!-- <div>
      <router-link to="/User/xianyu">动态路由咸鱼</router-link>
      <router-link to="/User/mengxiang">动态路由梦想</router-link>
    </div>
    <router-view></router-view> -->

 <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Index from './components/Index.vue'
export default {
  components: { Index },
  name: 'App'
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
