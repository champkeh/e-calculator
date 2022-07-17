<template>
  <div class="output-wrapper">
    <label for="output">输出:</label><br />
    <EncoderSelect v-model:value="outputEncoding" type="output" />
    <textarea :value="output" disabled></textarea>
    <button @click="inspect">查看二进制</button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, inject, Ref } from "vue"
import EncoderSelect from "@/components/EncoderSelect.vue"
import { useInputEncoding } from "@/composables/useInputEncoding"

const output = (inject("state") as any).output as Ref<string>
const outputEncoding = (inject("state") as any).outputEncoding as Ref<string>
const memory = (inject("state") as any).memory

const emit = defineEmits(["open"])

function inspect() {
  emit("open")
  memory.value = useInputEncoding(output, outputEncoding)
}
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
  font-size: 16px;
  word-break: break-all;
  resize: none;
}

button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
