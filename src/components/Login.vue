<template>

  <!--原始登录demo-->
  <!--<div>-->
  <!--<el-card>-->
  <!--用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>-->
  <!--<br><br>-->
  <!--密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>-->
  <!--<br><br>-->
  <!--<button v-on:click="login">登录</button>-->
  <!--</el-card>-->
  <!--</div>-->


  <!--  为了设计界面，我们需要关注的地方是 <template> 标签内的 html 和 <style> 标签内的 css。-->
  <!--使用element-ui后-->
  <body id="poster">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>


<!--  <template> 标签中随便写了一个登录的界面， methods 中定义了登录按钮的点击方法，即向后端 /login 接口发送数据，获得成功的响应后，页面跳转到 /index。
因为之前我们设置了默认的 URL，所以请求实际上发到了 http://localhost:8443/api/login。-->

<!--login()-->
<!--1.点击登录按钮，向后端发送数据-->
<!--2.受到后端返回的成功代码时，触发 store 中的 login() 方法，把 loginForm 对象传递给 store 中的 user 对象-->
<!--（*这里只是简单的实现，在后端我们可以通过用户名和密码查询数据库，获得 user 表的完整信息，比如用户昵称、用户级别等，返回前端，并传递给 user 对象，以实现更复杂的功能）-->
<!--3.获取登录前页面的路径并跳转，如果该路径不存在，则跳转到首页-->

<script>
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    username: 'admin',
                    password: '123'
                },
                responseResult: []
            }
        },
        methods: {
            login() {
                var _this = this
                console.log("AAA")
                console.log(this.$store.state)
                console.log("BBB")
                // axios 发起post请求 /login  里面是body参数, then 请求之后 successResponse.data 表示从前端获取的结果 .data objet中的属性值
                this.$axios
                    .post('/login', {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    })
                    .then(successResponse => {
                        if (successResponse.data.code === 200) {
                            console.log(successResponse.data.code)
                            // 如果响应吗是200 路由跳转 idnex页面
                            // this.$router.replace({path: '/index'})

                            _this.$store.commit('login', _this.loginForm)
                            var path = this.$route.query.redirect
                            this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
                        } else {
//            给出一个密码错误弹窗 todo
                            alert('账户密码错误')
                        }
                    })
                    .catch(failResponse => {
                    })
            }
        }
    }
</script>

<style>
  #poster {
    background: url("../assets/login_bg.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  /*默认body左上皆有间隔px*/
  body {
    margin: 0px
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
