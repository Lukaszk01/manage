import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ManagersPage from '../views/ManagersPage.vue'
// import StaffPage from '../views/StaffPage.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/managersPage',
    name: 'ManagersPage',
    component: ManagersPage
  },
  {
    path: '/staffPage',
    name: 'StaffPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StaffPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
