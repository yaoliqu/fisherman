<template>
  <div id="app">
    <el-scrollbar wrap-style="overflow-x: hidden;margin-bottom:0">
      <el-tabs v-model="activeName">
        <el-tab-pane label="生产工具" name="first">
          <TodoList />
          <quickLink />
        </el-tab-pane>
        <el-tab-pane label="别来沾边" name="second">
          <FishPage></FishPage>
        </el-tab-pane>
      </el-tabs>
    </el-scrollbar>
    <footer class="footer">
      Copyright © {{ new Date().getFullYear() }} by liku
      <br />
      <a href="https://github.com/yaoliqu/fisherman" target="_blank">
        源代码
      </a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    FishPage: () => import('./components/fisherman/FishPage.vue'),
    TodoList: () => import('./components/todoList/TodoList.vue'),
    quickLink: () => import('./components/quickLink/quickLink.vue'),
  },
  data() {
    return {
      activeName: 'first',
    }
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  color: #303133;
  width: 400px;
  // height: 600px;
  margin: 0 auto;
  overflow: hidden;
  .el-scrollbar {
    height: 100%;
   ::v-deep .el-scrollbar__view {
      padding: 8px;
    }
  } 
  .footer {
    position: relative;
    top: 0;
    left: auto;
    width: 100%;
    height: auto;
    margin: auto;
    border: none;
    padding: 4px 0;
    background: none;
    color: #666;
    font-size: 12px;
    transform: scale(0.9);
    font-weight: normal;
    text-decoration: none;
    text-align: center;
    a {
      color: rgb(26 115 232);
    }
  }
}
</style>
