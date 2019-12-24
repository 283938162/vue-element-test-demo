import Vue from 'vue'
import Router from 'vue-router'

// 导入刚才编写的组件
import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/home/AppIndex'
import AdminIndex from '@/components/admin/AdminIndex'
import UserBasic from '@/components/admin/user/UserBasic'
import Login from '@/components/Login'
import Register from '@/components/Register'
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
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/user/basic',
          name: 'UserBasic',
          component: UserBasic,
          meta: {
            requireAuth: true
          }
        }

      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/',
          name: 'index',
          redirect: '/index',
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
