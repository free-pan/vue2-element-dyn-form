import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicDemo from '../views/BasicDemo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BasicDemo',
    component: BasicDemo
  },
  {
    path: '/watch-model',
    name: 'WatchModelDemo',
    component: () =>
      import(
        /* webpackChunkName: "CusDynItemDemo" */ '../views/WatchModelDemo.vue'
      )
  },
  {
    path: '/cascade-operate',
    name: 'CascadeOperateDemo',
    component: () =>
      import(
        /* webpackChunkName: "CascadeOperateDemo" */ '../views/CascadeOperateDemo.vue'
      )
  }
]

const router = new VueRouter({
  routes
})

export default router
