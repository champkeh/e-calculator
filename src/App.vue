<template>
  <div id="app">
    <h1>编码计算器</h1>
    <TheExpression />
    <div class="flex-container">
      <TheInput @open="show = true" />
      <TheOutput @open="show = true" />
    </div>

    <MemoryInspector v-if="show" @close="show = false" />
  </div>
</template>

<script setup>
import { ref, provide, watchEffect } from "vue"
import { useNotification } from "naive-ui"
import MemoryInspector from "@/components/MemoryInspector.vue"
import TheExpression from "@/components/TheExpression.vue"
import TheInput from "@/components/TheInput.vue"
import TheOutput from "@/components/TheOutput.vue"
import * as exp from "@/utils/expression"
import { useInputEncoding } from "@/composables/useInputEncoding"
import { useOutputEncoding } from "@/composables/useOutputEncoding"

const show = ref(false)

const state = {
  input: ref("世界，你好！"),
  inputEncoding: ref("UTF-8"),
  output: ref(""),
  outputEncoding: ref("Base64"),
  expression: ref("input"),
  memory: ref(null),
}

provide("state", state)

const notification = useNotification()

watchEffect(() => {
  const input = useInputEncoding(state.input, state.inputEncoding)

  const context = {
    input,
    ...exp,
  }

  try {
    const output = exp.scopeEval(context, state.expression.value)
    state.output.value = useOutputEncoding(output, state.outputEncoding)
  } catch (e) {
    console.log(e)
    setTimeout(() => {
      notification.warning({
        title: "警告",
        content: "表达式或格式错误",
        duration: 2000,
        closable: false,
      })
    })
  }
})
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.flex-container {
  display: flex;
  gap: 20px;
}

#app {
  width: 1000px;
  margin: 0 auto;
}
</style>
