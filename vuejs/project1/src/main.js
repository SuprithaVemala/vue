import Vue from 'vue'
import App from './App.vue'
import vueRouter from "vue-router"
import Input from "./input.vue"
const routes=[
  {
    path:"/",component:App
  },
  {
    path:"/input",component:Input
  }
]

const router= new vueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
