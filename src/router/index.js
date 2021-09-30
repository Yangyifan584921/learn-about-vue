import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

export const routers = [
  {
    path: '/',
    name: 'welcome',
    zhName: '首页',
    component: Layout,
    // redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    zhName: '家庭',
    // redirect: '/home/index',
    component: Layout,
    children: [{
      path: 'index',
      name: 'index',
      zhName: '家庭',
      component: () => import('@/views/home/index')
    }]
  }, 
  {
    path: '/list',
    name: 'list',
    zhName: '列表',
    component: Layout,
    // redirect: '/list/index',
    children: [{
      path: 'index',
      name: 'index',
      zhName: '列表',
      component: () => import('@/views/list/index')
    }, {
      path: 'detail',
      name: 'detail',
      zhName: '详情',
      component: () => import('@/views/list/detail')
    }]
  }
]

export default new VueRouter({
  mode: 'history',
  routes: routers
})