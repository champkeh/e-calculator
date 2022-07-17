<template>
  <div class="output-wrapper">
    <label for="output">输出:</label><br>
    <textarea :value="output" disabled></textarea>
  </div>
</template>

<script lang="ts" setup>
import {inject, Ref} from 'vue'

const output = inject('output') as Ref<string>
</script>

<style lang="scss" scoped>
.output-wrapper {
  flex: 1;
}
textarea {
  width: 100%;
  min-height: 200px;
  resize: none;
  word-break: break-all;
}
</style>
