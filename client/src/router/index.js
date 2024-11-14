import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
  },

  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateItemsView.vue'),
  },

  {
    path: '/checked',
    name: 'check',
    component: () => import('../views/CheckedItems.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Охоронець маршруту для перевірки авторизації
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isLoggedIn()) {
    next({ name: 'register' }) // Перенаправити на сторінку логіну
  } else {
    next()
  }
})

export default router
