import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }, {
    path: '/register',
    // name: 'Register',
    component: () => import('@/views/Register.vue'),
    children: [
      {
        path: '',
        name: 'RegisterForm',
        component: () => import('@/components/register/RegisterForm.vue')
      },
      {
        path: 'confirmation-code',
        name: 'RegisterConfirmationCode',
        component: () => import('@/components/register/ConfirmationCode.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
