import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './router.js'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:Router,
  mode:"history"
})


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
