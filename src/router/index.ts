import { createRouter, createWebHistory } from 'vue-router'
import TableView from '../views/TableView.vue'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/table',
      name: 'table',
      component: TableView
    }
  ]
})

export default router
