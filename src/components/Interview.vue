<template>
  <div class="interview">
    总结和尝试一下遇到的问题
    {{ $route.params.name }}
  </div>
</template>

<script>
export default {
  name: 'Interview',
  props: {
    msg: String
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    console.log(to)
    console.log(from)
    next(); // 必须执行next()才会触发$route路由的跳转
  },
  watch: {
    '$route' (to, from) {
      console.log('watch $route')
      console.log(to)
      console.log(from)
    }
  },
  mounted() {
    var _router = this.$route;
    console.log(_router.params)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
