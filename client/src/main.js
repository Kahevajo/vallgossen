import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import "./assets/global.css"

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import Home from "./components/Home.vue"
import Booking from "./components/Booking.vue"

Vue.use(Buefy)

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/booking', component: Booking }
]

const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
