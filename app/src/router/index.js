import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Dashboard/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Dashboard/Register.vue')
  },
  {
    path: '/certificate/:id',
    name: 'cert-view',
    component: () => import('@/views/View.vue')
  },
  {
    path: '/certificates',
    name: 'cert-list-view',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard/Index.vue')
  },
  {
    path: '/dashboard/certificate/new',
    name: 'cert-new',
    component: () => import('@/views/Dashboard/New.vue')
  },
  {
    path: '/dashboard/certificate/:id',
    name: 'cert-manage',
    component: () => import('@/views/Dashboard/Manage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
