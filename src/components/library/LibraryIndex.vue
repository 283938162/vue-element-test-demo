<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <!--@ 设置触发事件-->
      <!--ref属性 设置了一个引用名-->
      <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
    </el-aside>
    <el-main>
      <books class="books-area" ref="booksArea"></books>
    </el-main>
  </el-container>
</template>

<!--组件之间的通信-->
<!--sidemenu和book组件可以看做libraryIndex的子组件,是 LibraryIndex 组件的一部分-->


<!--父组件收到指令,触发@indexSelect事件, 执行事件对应的方法listByCategory方法-->
<!--listCategory方法是一个网络请求的方法,发送请求,后端执行查询代码-->
<!--返回数据,再通过refs,修改子组件Books中的data数据,以动态渲染页面.-->

<script>
  import SideMenu from './SideMenu'
  import Books from './Books'

  export default {
    name: 'AppLibrary',
    components: {Books, SideMenu},
    methods: {
      listByCategory () {
        var _this = this
        var cid = this.$refs.sideMenu.cid
        var url = 'categories/' + cid + '/books'
        this.$axios.get(url).then(resp => {
          if (resp && resp.status === 200) {
            _this.$refs.booksArea.books = resp.data
          }
        })
      }
    }
  }
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

