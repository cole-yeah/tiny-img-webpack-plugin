import Vue from 'vue'
import VueRouter from "vue-router"

import MainPage from '../pages/Main'
import SearchPage from '../pages/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: MainPage,
  },
  {
    path: '/search', 
    component: SearchPage,
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
})