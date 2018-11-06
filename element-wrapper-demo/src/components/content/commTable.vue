<template>
  <table :class="{normal: true}">
    <thead>
    <tr>
      <th v-for="(head,index) in HeadList" :key="index">{{ head }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(attr,index) in List" :key="index">
      <td v-for="(item,index) in attr" :key="index">{{ item }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default{
  name: "commTable",
  props: {
    HeadList: Array,
    List: Array
  }
};
</script>

<style>
  .normal tr td,
  .normal tr th {
    border: none;
    border-bottom: 1px solid #eee;
    padding: 10px;
  }
  table.normal {
    font-size: 13px;
  }
</style>
