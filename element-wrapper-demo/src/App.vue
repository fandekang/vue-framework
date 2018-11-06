<template>
  <el-container>
    <el-aside width="200px">
      <Menu></Menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Menu from "./components/layout/Menu.vue";
export default {
  name: "App",
  components: { Menu }
};
</script>

<style>
.el-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: left;
  height: 100%;
}

.el-main {
  text-align: center;
}
</style>
