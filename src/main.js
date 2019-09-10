import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

let arr=[]
for(let i=0;i<8;i++){
  arr.push(function() {console.log(i)})
}
arr[0]()
arr[1]()
arr[2]()
arr[3]()
