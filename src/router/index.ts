import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'catalog',
    component: () => import('@/components/catalog__main.vue'),
  },

  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/components/cart__main.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router