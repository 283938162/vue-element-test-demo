<template>
  <!--这个div是必须的,vue模板只能有一个根对象,否则会报如下错误-->
  <!--Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.-->
  <div>
    <h1>{{ msg }}</h1>
    <h1 id="za">Hello Vue!</h1>
    <a herf="#test">Jump to test</a><br/>
    <a herf="https://www.d4j.cn">Jump to book</a>
  </div>


</template>

<script>
    export default {
        name: 'Test',
        data() {
            return {
                msg: '这是一个测试页面!,name Test'
            }
        }
    }
</script>

<!--样式优先级 内层优先于外层-->
<style>
  h1 {
    font-weight: normal;
    color: red;
  }

  #za {
    color: #42b983;
  }
</style>
