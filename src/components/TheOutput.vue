<template>
  <div class="output-wrapper">
    <label for="output">输出:</label><br />
    <EncoderSelect v-model:value="outputEncoding" />
    <textarea :value="output" disabled></textarea>
    <button>查看二进制</button>
  </div>
</template>

<script lang="ts" setup>
import { inject, Ref } from "vue"
import EncoderSelect from "@/components/EncoderSelect.vue"

const output = (inject("state") as any).output as Ref<string>
const outputEncoding = (inject("state") as any).outputEncoding as Ref<string>
</script>

<style lang="scss" scoped>
.output-wrapper {
  position: relative;
  flex: 1;
  margin-top: 30px;
}

textarea {
  width: 100%;
  min-height: 200px;
  word-break: break-all;
  resize: none;
}

button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
