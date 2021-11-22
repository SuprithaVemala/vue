import vue from 'vue'
import vueRouter from 'vue-router'
import addCity from '../views/addCities.vue'
vue.use(vueRouter)

const routes=[
  {
    path:'/',
    name:'AddCity',
    component:addCity
  }
]

const router= new vueRouter({
  mode:"history",
  routes
})

export default router