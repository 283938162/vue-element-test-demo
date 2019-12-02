import Vue from 'vue'
import Router from 'vue-router'

// 导入刚才编写的组件
import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Test from '@/components/Test'
import Home from '@/components/Home'
import LibraryIndex from '../components/library/LibraryIndex'
import About from '../components/library/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/about',
          name: 'About',
          component: About,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
