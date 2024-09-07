import { createRouter, createWebHashHistory } from 'vue-router'
import TodoLogIn from '../views/TodoLogIn.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/TodoLogIn.vue')
    },
    {
      path: '/signUpPage',
      component: () => import('../views/SignUpPage.vue')
    },
    {
      path: '/todoListPage',
      component: () => import('../views/TodoListPage.vue')
    }
  ]
})

export default router
