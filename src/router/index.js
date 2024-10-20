import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeeklyView from '../views/WeeklyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/weekly/:num',
      name: 'weekly',
      component: () => import('@/views/WeeklyView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
