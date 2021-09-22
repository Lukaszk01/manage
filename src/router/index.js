import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ManagersPage from '../views/ManagersPage.vue'
import UserPersonalDetails from '../views/UserPersonalDetails.vue'
import UserShifts from '../views/UserShifts.vue'
import StaffPage from '../views/StaffPage.vue'

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
    component: StaffPage,
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router