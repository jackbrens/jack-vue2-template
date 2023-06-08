import './assets/main.css'
import VueRouter from "vue-router";
import router from "./router";
import Vue from 'vue'
import App from './App'
Vue.use(VueRouter)
Vue.config.productionTip = false

console.log('hello main')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')