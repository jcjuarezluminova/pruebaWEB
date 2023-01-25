import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegionView from '../views/RegionView.vue'
import DivisionView from '../views/DivisionView.vue'
import CasaMedicaView from '../views/CasaMedicaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/region',
    name: 'region',
    component: RegionView
  },
  {
    path: '/division',
    name: 'division',
    component: DivisionView
  },
  {
    path: '/casa-medica',
    name: 'casaMedica',
    component: CasaMedicaView
  }
]

const router = new VueRouter({
  routes
})

export default router
