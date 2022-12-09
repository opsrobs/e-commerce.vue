import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/authView.vue')
  },
  {
    path: '/bolo',
    name: 'bolos',
    component: () => import('../views/products_cake_View.vue')
  },
  {
    path: '/payment',
    name: 'Pagar',
    component: () => import('../views/PaypalView.vue')
  },
  {  
    path: '/endereco',
    name: 'endereco',
    component: () => import('../views/EnderecoView.vue')
  },
  {
    path: '/payment/:id',
    name: 'Pagar',
    component: () => import('../views/PaypalView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
