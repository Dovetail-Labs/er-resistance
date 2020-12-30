import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/activity-1',
    name: 'Activity 1',
    component: Activity1
  },
  {
    path: '/activity-2',
    name: 'Activity 2',
    component: Activity2
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
