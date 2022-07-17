<template>
  <div class="wrapper">
    <table>
      <tr>
        <td>名称</td>
        <td>类型</td>
        <td>说明</td>
      </tr>
      <tr>
        <td>input</td>
        <td>变量</td>
        <td>输入框的值</td>
      </tr>
      <tr>
        <td>b64Enc</td>
        <td>函数</td>
        <td>base64编码</td>
      </tr>
      <tr>
        <td>b64Dec</td>
        <td>函数</td>
        <td>base64解码</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "BuiltIn"
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px;
}

table {
  border-collapse: collapse;
  td {
    padding: 5px 10px;
    border: 1px solid #c4c4c4;
  }
}
</style>
