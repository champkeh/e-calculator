<template>
  <div class="wrapper">
    <label for="expression">表达式:</label><br />
    <textarea id="expression" v-model="expression"></textarea>
  </div>
  <div>
    常用表达式
    <n-space>
      <n-button type="primary" @click="md5">MD5</n-button>
      <n-button type="primary" @click="sha1">SHA1</n-button>
      <n-button type="primary" @click="sha256">SHA256</n-button>
      <n-button type="primary" @click="sha512">SHA512</n-button>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { inject, Ref } from "vue"
import { NButton, NSpace } from "naive-ui"

const expression = (inject("state") as any).expression as Ref<string>

function md5() {
  expression.value = "md5(input)"
}
function sha1() {
  expression.value = "sha1(input)"
}
function sha256() {
  expression.value = "sha256(input)"
}
function sha512() {
  expression.value = "sha512(input)"
}
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 100px;
  font-family: monospace;
  font-size: 20px;
  resize: none;
}
</style>
