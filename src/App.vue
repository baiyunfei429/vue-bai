<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">to HelloWorld</router-link> |
      <router-link to="/interviewjuejin">to Interview-juejin</router-link> |
      <router-link to="/interview/bai">to interview bai</router-link> |
      <router-link to="/interview/yun">to interview yun</router-link> |
      <router-link to="/test">to test demo</router-link> |
      <router-link to="/mycanvas">to canvas demo</router-link> |
      <router-link to="/debounce-and-throttle">to debounce-and-throttle demo</router-link> |
    </div>
    <div class="router-link-wrap">
      <router-view/>
    </div>

    <!-- <div class="container"></div> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}
.router-link-wrap {
  margin-top: 30px;
  border: 1px solid #222;
  background: #e8e8e8;
  height: 80%;
  overflow: auto;
}

.container {
  width: 1px;
  height: 100px;
  background: red;
  transition: width 2s;
}
/* @keyframes myfirst
{
from {width: 100px;}
to {width: 300px;}
} */
.container:hover
{
  width: 300px;
}
</style>
