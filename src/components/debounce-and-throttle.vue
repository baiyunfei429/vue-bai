<template>
  <div class="content-wrap">
    <h1 id="centerNum">0</h1>
  </div>
</template>

<script>
  export default {
    name: 'debounceAndThrottle',
    props: {},
    methods: {

    },
    mounted() {
      var num = 0;
      window.onscroll = function () {
        var
          h = document.getElementById('centerNum');
        h.innerHTML = num;
        num++;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-wrap {
    height: 3000px;
  }

  #centerNum {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>