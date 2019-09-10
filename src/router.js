import Vue from 'vue';
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld';
import Interview from './components/Interview';
import InterviewJuejin from './components/Interview-juejin';
import Test from './components/Test';
import MyCanvas from './components/MyCanvas';
import debounceAndThrottle from './components/debounce-and-throttle';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/interview/:name',
      name: 'interview',
      component: Interview
    },
    {
      path: '/interviewjuejin',
      name: 'interviewjuejin',
      component: InterviewJuejin
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/mycanvas',
      name: 'mycanvas',
      component: MyCanvas
    },
    {
      path: '/debounce-and-throttle',
      name: 'debounce-and-throttle',
      component: debounceAndThrottle
    },
  ]
})