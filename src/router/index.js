import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    },
  ]
})

export default router
