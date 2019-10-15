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

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123'
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            // 如果响应吗是200 路由跳转 idnex页面
//            this.$router.replace({path: '/index'})
            _this.$store.commit('login', _this.loginForm)
            var path = this.$routh.query.redirect
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
