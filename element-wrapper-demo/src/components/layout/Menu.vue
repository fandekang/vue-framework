<template>
  <menu-wrapper :title="title" :titleHeight="'150px'" :titleBgColor="'#303848'" :titleTextColor="'#fff'"
                :default-active="'1'" class="menu" background-color="#303848"
                text-color="#fff"
                active-text-color="#ffd04b" :data-json="localData" :router="true"></menu-wrapper>
</template>
<script>
/* eslint-disable object-property-newline */
export default {
  name: "Menu",
  data() {
    return {
      localData: [
        {text: "概述", id: "/", icon: "el-icon-tickets"},
        {
          text: "导航", id: "2", icon: "el-icon-message",
          children: [{
            text: "横向", id: "/HMenu", icon: "el-icon-date"
          }, {
            text: "纵向", id: "/VMenu", icon: "el-icon-service"
          }]
        },
        {text: "表格", id: "/Grid", icon: "el-icon-star-off"},
        {text: "面板", id: "/Panel", icon: "el-icon-news"}
      ],
      title: "<p style='font-size: 18px'><b>ElementUI Wrapper</b></p><p style='font-size: 14px'>Tuo Qun</p><hr style='height: 1px;border: 0;color: #fff;background-color: #fff;'>"
    };
  }
};
</script>

<style>
  .menu {
    width: 100%;
    height: 100%;
  }
  /*.el-menu-item:hover,*/
  /*.el-submenu__title:hover {*/
    /*background-color: rgb(255, 255, 255)!important;*/
    /*color: #409EFF;*/
  /*}*/
</style>
