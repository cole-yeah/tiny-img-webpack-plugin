import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import NotFoundPage from './pages/404Page'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: HomePage,
  }, {
    path: '/login',
    component: LoginPage,
  }, {
    path: '/404',
    component: NotFoundPage,
  }, {
    path: '*',
    redirect: '/404'
  }]
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
