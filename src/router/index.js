import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ManagerPage from '../views/ManagerPage.vue'

const routes = [
  {
    path: 'ManagerPage/',
    name: 'ManagerPage',
    component: ManagerPage
  },
  {
    path: '/StaffPage',
    name: 'StaffPage',
    // route level code-splitting
    // this generates a separate chunk (StaffPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "StaffPage" */ '../views/StaffPage.vue')
  },
    {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
