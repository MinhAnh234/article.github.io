import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'jquery';
Vue.config.productionTip = false


import VueRouter from 'vue-router'
Vue.use(VueRouter)
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
const routes = [
  { path: '/', component: HomePage, name: 'HomePage', },
  { path: '/HomePage', component: HomePage, name: 'Home', },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'Register'},
  { path: '/dashboard', component: Dashboard, name: 'dashboard'},
]
const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
