<template>
  <div class="wrapper">
    <label for="expression">表达式:</label><br />
    <textarea id="expression" v-model="expression"></textarea>
  </div>
  <div>
    常用表达式:
    <n-space justify="space-between">
      <n-space>
        <n-button type="primary" @click="md5">MD5</n-button>
        <n-button type="primary" @click="sha1">SHA1</n-button>
        <n-button type="primary" @click="sha256">SHA256</n-button>
        <n-button type="primary" @click="sha512">SHA512</n-button>
        <n-button type="primary" @click="mask">mask</n-button>
      </n-space>
      <n-space style="flex: 1" justify="end">
        <n-button type="primary" @click="showDrawer = true"
          >表达式说明</n-button
        >
      </n-space>
    </n-space>
  </div>

  <n-drawer v-model:show="showDrawer" :width="800" placement="right">
    <n-drawer-content title="表达式说明">
      <BuiltIn />
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import { inject, ref, Ref } from "vue"
import { NButton, NSpace, NDrawer, NDrawerContent } from "naive-ui"
import BuiltIn from "@/components/BuiltIn.vue"

const expression = (inject("state") as any).expression as Ref<string>

const showDrawer = ref(false)

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
function mask() {
  expression.value = 'mask(input, "")'
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
