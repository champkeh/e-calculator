<template>
  <div class="input-wrapper">
    <label for="input">输入:</label><br />
    <EncoderSelect v-model:value="inputEncoding" type="input" />
    <textarea v-model="input" spellcheck="false"></textarea>
    <button @click="inspect">查看二进制</button>
  </div>
</template>

<script lang="ts" setup>
import { inject, Ref } from "vue"
import EncoderSelect from "@/components/EncoderSelect.vue"
import { useInputEncoding } from "@/composables/useInputEncoding"

const input = (inject("state") as any).input as Ref<string>
const inputEncoding = (inject("state") as any).inputEncoding as Ref<string>
const memory = (inject("state") as any).memory

const emit = defineEmits(["open"])

function inspect() {
  emit("open")
  memory.value = useInputEncoding(input, inputEncoding)
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  flex: 1;
  margin-top: 30px;
}

textarea {
  width: 100%;
  min-height: 200px;
  font-size: 16px;
  resize: none;
}

button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
