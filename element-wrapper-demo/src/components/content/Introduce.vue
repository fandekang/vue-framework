<template>
  <div class="introduce">
    <h1>介绍</h1>
    <h3>使用方式</h3>
    <p>本框架基于Vue，ElementUI, 请在使用前npm构建vue-cli</p>
    <p>执行 npm element-framework -d</p>
    <hr>
    <p>import Vue from "vue";</p>
    <p>import ElementUI from "element-ui";</p>
    <p>import ElWrapper from "element-framework";</p>
    <p>import "element-ui/lib/theme-chalk/index.css";</p>
    <p>Vue.use(ElementUI);</p>
    <p>Vue.use(ElWrapper);</p>
  </div>
</template>
<script>
export default {
  name: "Introduce"
};
</script>
<style>
  .introduce {
    text-align: left;
  }
  h1 {
    text-align: center;
  }
</style>
