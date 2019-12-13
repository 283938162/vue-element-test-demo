// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 添加对store的引用
import store from './store'

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
// axios.defaults.baseURL = 'http://120.77.83.59:8443/api'

//为了让前端能够带上 cookie，我们需要通过 axios 主动开启 withCredentials 功能
axios.defaults.withCredentials = true

//全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

// 钩子函数及在某些时机会被调用的函数。这里我们使用 router.beforeEach()，意思是在访问每一个路由前调用。
// 这个的逻辑很简单，首先判断访问的路径是否需要登录，如果需要，判断 store 里有没有存储 user 的信息，如果存在，则放行，否则跳转到登录页面，并存储访问的页面路径（以便在登录后跳转到访问页）。

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {
//       if (store.state.user.username) {
//         next()
//       } else {
//         next({
//           path: 'login',
//           query: {redirect: to.fullPath}
//         })
//       }
//     } else {
//       next()
//     }
//   }
// )


// 引入shiro认证之后

router.beforeEach((to,from,next) => {
  if (to.meta.requireAuth){
    console.log("AAAA")
    if(store.state.user){
      console.log("BBBB")
      axios.get('/authentication').then(
        resp => {
          console.log("CCCC")
          if (resp) next()
        }
      )
    }else{
      next({
        path:'login',
        query:{redirect:to.fullPath}
      })
    }
  } else {
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})


