import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ManagersPage from '../views/ManagersPage.vue'
import UserPersonalDetails from '../views/UserPersonalDetails.vue'
import UserShifts from '../views/UserShifts.vue'
import StaffPage from '../views/StaffPage.vue'
import Notifications from '../views/Notifications.vue'

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/managersPage',
    name: 'ManagersPage',
    component: ManagersPage
  },
  {
    path: '/staffPage',
    name: 'StaffPage',
    component: StaffPage,
    meta: { transition: 'fade-in-right' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/StaffPage.vue'),
    children: [
        {
          path: '/personalDetail',
          name: 'UserPersonalDetails',
          component: UserPersonalDetails
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: '/shifts',
          name: 'UserShifts',
          component: UserShifts
        }
      ]
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
