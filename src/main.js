// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routers from './routes'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.directive('titleColor',{
  bind:function(el,binding,vnode){
    el.style.color="#"+Math.random().toString(16).slice(2,8)
  }
})
const router=new VueRouter({
  routes:routers,
  mode:"history"
})
new Vue({
  router:router,
  el: '#app',
  components: { App},
  template: '<App/>'
})
