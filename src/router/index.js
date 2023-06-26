import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/Map.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/Location.vue')
    },
    {
      path: '/manual',
      name: 'manual',
      component: () => import('../views/Manual.vue')
    },
    {
      path: '/in-visa',
      name: 'InVisa',
      component: () => import('../views/InVisa.vue')
    },
    {
      path: '/out-visa',
      name: 'OutVisa',
      component: () => import('../views/OutVisa.vue')
    }
  ]
})

export default router
