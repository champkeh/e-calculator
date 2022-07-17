<template>
  <div class="input-wrapper">
    <label for="input">输入:</label><br />
    <EncoderSelect v-model:value="inputEncoding" />
    <textarea v-model="input" spellcheck="false"></textarea>
    <button>查看二进制</button>
  </div>
</template>

<script lang="ts" setup>
import { inject, Ref } from "vue"
import EncoderSelect from "@/components/EncoderSelect.vue"

const input = (inject("state") as any).input as Ref<string>
const inputEncoding = (inject("state") as any).inputEncoding as Ref<string>
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
  resize: none;
}

button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
