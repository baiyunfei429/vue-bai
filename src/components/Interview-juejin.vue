<template>
  <div class="interview">
    <h3>掘金</h3>
    <ul class="content">
      <li>1、</li>
      <li>
        <div class="parent">
          <div class="child">
            child
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Interview',
    props: {
      msg: String
    },
    watch: {},
    methods: {
      someConsole() {
        /**
         * 在 JS 中，存在着 6 种原始值，分别是：
          boolean
          null
          undefined
          number
          string
          symbol
        */
        console.log(0.1 + 0.2)
        console.log(typeof null)
        console.log(typeof '1')
        console.log(typeof Number()) // 'number')
        console.log(typeof Symbol()) // 'symbol')
        console.log(typeof console.log) // 'function')
        console.log(Symbol('foo'));
        console.log(Symbol('foo') === Symbol('foo'));
      },
      paramsInFunction(person) {
        person.age = 26
        person = {
          name: 'yyy',
          age: 30
        }
        return person
      },
      testParamsInFucntion() {
        var p1 = {
          name: 'baiyunfei',
          age: 25
        }
        var p2 = this.functionParamsTest(p1)
        console.log(p1) // -> ? 
        console.log(p2) // -> ?
      },
      eventLoopFunc() {
        console.log('script start')

        async function async1() {
          await async2()
          console.log('async1 end')
        }
        async function async2() {
          console.log('async2 end')
        }
        async1()

        setTimeout(function () {
          console.log('setTimeout')
        }, 0)

        new Promise(resolve => {
            console.log('Promise')
            resolve()
          })
          .then(function () {
            console.log('promise1')
          })
          .then(function () {
            console.log('promise2')
          })

        console.log('script end')
        // script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout

        // Interview-juejin.vue?d682:56 script start
        // Interview-juejin.vue?d682:63 async2 end
        // Interview-juejin.vue?d682:72 Promise
        // Interview-juejin.vue?d682:82 script end
        // main.js?56d7:14 0
        // main.js?56d7:14 1
        // main.js?56d7:14 2
        // main.js?56d7:14 3
        // Interview-juejin.vue?d682:60 async1 end
        // Interview-juejin.vue?d682:76 promise1
        // Interview-juejin.vue?d682:79 promise2
        // Interview-juejin.vue?d682:68 setTimeout
      }
    },
    mounted() {
      this.eventLoopFunc();
      // this.someConsole();
      // this.testParamsInFucntion();
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

  * {
    margin: 0;
    padding: 0;
  }

  .parent {
    width: 100px;
    height: 100px;
    /*将padding设置，来挤出来居中的样子；但是要注意的是，此时的width和height要和子元素的大小一样，否则还是不居中*/
    padding: 100px;
    border: 1px solid;
    margin: 100px auto;
  }

  .child {
    width: 100px;
    height: 100px;
    background: pink;
    line-height: 100px;
    text-align: center;
  }

  .parent {
    position: relative;
    width: 200px;
    height: 200px;
    /*padding: 100px;*/
    border: 1px solid;
    /* margin: 100px auto; */
  }

  .child {
    position: absolute;
    /*left+right+width+padding+margin=包含块的宽度*/
    /*0 0 100 0 auto =300*/
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    background: pink;
    line-height: 100px;
    text-align: center;
  }
</style>