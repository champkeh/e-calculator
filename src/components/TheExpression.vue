<template>
  <div class="wrapper">
    <label for="expression">表达式:</label><br />
    <textarea id="expression" v-model="expression">12</textarea>
  </div>
</template>

<script lang="ts" setup>
import { inject, Ref } from "vue"

const expression = (inject("state") as any).expression as Ref<string>
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
