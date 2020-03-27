import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import './assets/app.css';
import jQuery from 'jquery';
import admin from './admin.vue';
import home from './home.vue';
import VueSession from 'vue-session'

global.jQuery = jQuery

let Bootstrap = require('bootstrap')

Vue.use(VueRouter);
Vue.use(VueSession)

const routes = [
  {path: '/', component: home},
  {path: '/administrator', component: admin},
  {path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes: routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

