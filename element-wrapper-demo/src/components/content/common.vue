<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <h5>{{ summary }}</h5>
    <h2>示例</h2>
    <table :class="{example: true}">
      <slot name="tbody"></slot>
      <tfoot>
      <tr>
        <td>
          <div class="codeDiv" @click="showCode = !showCode">
            <i class="el-icon-caret-bottom"></i>
            <span class="showDivSpan">
                  <span v-if="showCode">隐藏代码</span>
                  <span v-else>显示代码</span>
                </span>
          </div>
          <div :class="{codeArea: true, show:showCode}">
              <slot name="code"></slot>
          </div>
        </td>
      </tr>
      </tfoot>
    </table>
    <h2>参数</h2>
    <comm-table :HeadList="AttrHeadList" :List="AttrList"></comm-table>
    <template v-if="MethodHeadList">
      <h2>方法</h2>
      <comm-table :HeadList="MethodHeadList" :List="MethodList"></comm-table>
    </template>
    <template v-if="EventHeadList">
      <h2>事件</h2>
      <comm-table :HeadList="EventHeadList" :List="EventList"></comm-table>
    </template>
    <slot name="extra"></slot>
  </div>
</template>

<script>
import CommTable from "./commTable.vue";

export default {
  components: {CommTable},
  name: "common-content",
  props: {
    AttrHeadList: Array,
    AttrList: Array,
    title: String,
    summary: String,
    MethodHeadList: Array,
    MethodList: Array,
    EventHeadList: Array,
    EventList: Array
  },
  data() {
    return {
      showCode: false
    };
  }
};
</script>

<style>
  .content {
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    box-sizing: border-box;
  }
  .example {
    background-color: #fff;
    border: 1px solid #eee;
    table-layout: fixed;
  }
  h1 {
    margin-top: 0;
  }
  h5 {
    font-weight: normal;
  }
  hr {
    border: 1px solid #eee;
  }
  table.normal,
  table.example {
    width: 100%;
    border-collapse: collapse;
  }
  table.normal > tbody > tr > td,
  table.normal > tbody > tr > th,
  table.example > tbody > tr > td,
  table.example > tbody > tr > th {
    padding: 20px;
  }
  .example {
    box-shadow: 1px 1px 1px #ddd;
  }
  .example > tbody > tr > td {
    border: 1px solid #eee;
  }
  .example > tfoot > tr > td {
    padding: 10px;
    background-color: #f8f8f8;
  }
  .codeDiv {
    width: 100%;
    text-align: center;
    color: #409EFF;
    font-size: 14px;
    cursor: pointer;
  }
  .codeDiv:hover .showDivSpan {
    transform: translate(5px, 0);
    opacity: 1;
  }
  .showDivSpan {
    display: inline-block;
    transform: translate(35px, 0);
    transition: all .3s;
    opacity: 0;
  }
  .el-icon-caret-bottom {
    display: inline-block;
    transform: translate(35px, 0);
    transition: all .3s;
  }
  .codeDiv:hover .el-icon-caret-bottom {
    transform: translate(5px, 0);
  }
  .codeArea {
    background-color: #f8f8f8;
    color: #222;
    overflow: hidden;
    max-height: 0;
    font-size: 12px;
    transition: max-height .5s;
  }
  .codeArea.show {
    max-height: 1300px;
  }
  .codeTip {
    background-color: #fff;
    color: #222;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    border: 1px solid #eee;
    padding: 15px;
    margin: 10px 0 10px 0;
  }
  pre {outline: 1px solid #eee; padding: 5px; margin: 5px; }
  .string { color: green; }
  .number { color: darkorange; }
  .boolean { color: blue; }
  .null { color: magenta; }
  .key { color: red; }
</style>
