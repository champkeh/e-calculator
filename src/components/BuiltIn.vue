<template>
  <div class="wrapper">
    <n-space vertical>
      <n-alert title="说明" type="info">
        表达式在运算过程中，内部采用 CryptoJS 的
        <code>CryptoJS.lib.WordArray</code> 格式，这种格式的结构为
        <code>{sigBytes: number,words: Uint32Array}</code>。
        输入/输出都会根据所选择的编码转换为<code>WordArray</code>供下面这些表达式函数使用。
      </n-alert>
      <n-alert title="注意" type="warning">
        表达式的结果必须是
        <code>WordArray</code>格式，才能在输出中正确的进行解码。<br />
        如果需要，utils目录中有<code>Uint8Array</code>与<code>WordArray</code>互转的工具
      </n-alert>
    </n-space>

    <h3 class="title">全部可用表达式</h3>
    <n-table :single-line="false" :striped="true">
      <thead>
        <tr>
          <th>名称</th>
          <th>类别</th>
          <th>说明</th>
          <th>类型</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in builtins" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.kind }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.sign }}</td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup>
import { NTable, NAlert, NSpace } from "naive-ui"
const builtins = [
  {
    name: "input",
    kind: "变量",
    sign: "WordArray",
    description: "输入框的值",
  },
  {
    name: "md5",
    kind: "函数",
    sign: "(wordArray: WordArray) => WordArray",
    description: "计算 MD5 哈希值",
  },
  {
    name: "sha1",
    kind: "函数",
    sign: "(wordArray: WordArray) => WordArray",
    description: "计算 SHA-1 哈希值",
  },
  {
    name: "sha224",
    kind: "函数",
    sign: "(wordArray: WordArray) => WordArray",
    description: "计算 SHA-224 哈希值",
  },
  {
    name: "sha256",
    kind: "函数",
    sign: "(wordArray: WordArray) => WordArray",
    description: "计算 SHA-256 哈希值",
  },
  {
    name: "sha384",
    kind: "函数",
    sign: "(wordArray: WordArray) => WordArray",
    description: "计算 SHA-384 哈希值",
  },
  {
    name: "sha512",
    kind: "函数",
    sign: "(wordArray: WordArray) => WordArray",
    description: "计算 SHA-512 哈希值",
  },
  {
    name: "sha3",
    kind: "函数",
    sign: "(wordArray: WordArray) => WordArray",
    description: "计算 SHA-3 哈希值",
  },
  {
    name: "rip",
    kind: "函数",
    sign: "(wordArray: WordArray) => WordArray",
    description: "计算 RIPEMD-160 哈希值",
  },
  {
    name: "mask",
    kind: "函数",
    sign: "(wordArray: WordArray, mask: HexString) => WordArray",
    description: "计算掩码",
  },
]
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}

code {
  width: fit-content;
  padding: 0.125rem 0.25rem;
  background: #f2f1f1;
  border-radius: 0.25em;
}
</style>
