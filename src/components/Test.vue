<template>
  <div class="hello">
    <h3>test demo</h3>
    <div>
      <ul class="item-list">
        <li class="item clearfloat">
          <div class="left float-item"><img src="../assets/default_avatar.png" alt="left"></div>
          <div class="content float-item">
            <p>baiyunfei429</p>
            <p>baiyunfei429@163.com</p>
          </div>
          <div class="right float-item">
            <img src="../assets/logo.png" alt="right">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  methods: {
    getPageParams() {

    }
  },
  mounted() {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 10px 0 0;
}
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #aaa;
}
.clearfloat::after {
  clear:both;
  content:'.';
  display:block;
  width: 0;
  height: 0;
  visibility:hidden;
}
.float-item {
  float: left;
}
.right {
  float: right;
}
.right img {
  width: 30px;
  height: 30px;
  /* margin-top: 50%; */
}
.left img {
  width: 50px;
  height: 50px;
  /* margin-top: 50%; */
}

</style>
