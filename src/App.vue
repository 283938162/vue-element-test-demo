<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<p>这里是主控件 App.vue,也就是说 componments包下的*.vue 都是这个主控件的元素,保证风格统一!</p><br/>-->
    <!--<p>每个页面导向都是在router中index.js设置访问路由</p>-->
    <router-view/>
  </div>
</template>

<script>
export default {
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
  /*margin-top: 60px;*/
}
</style>
