<template>
  <div id="app">
    <h1>E-Calculator</h1>
    <TheExpression />
    <div class="flex-container">
      <TheInput />
      <TheOutput />
    </div>

    <!--    <BuiltIn />-->
    <!--    <MemoryInspector :data="input" />-->
  </div>
</template>

<script setup>
import { ref, provide, watchEffect } from "vue"
// import BuiltIn from "@/components/BuiltIn.vue"
import TheExpression from "@/components/TheExpression.vue"
import TheInput from "@/components/TheInput.vue"
import TheOutput from "@/components/TheOutput.vue"
import {
  scopeEval,
  md5,
  sha1,
  sha256,
  sha384,
  sha512,
  sha224,
  sha3,
  rip,
} from "@/utils"
import { useInputEncoding } from "@/composables/useInputEncoding"
import { useOutputEncoding } from "@/composables/useOutputEncoding"

const state = {
  input: ref("世界，你好！"),
  inputEncoding: ref("UTF-8"),
  output: ref(""),
  outputEncoding: ref("UTF-8"),
  expression: ref("input"),
}

provide("state", state)

watchEffect(() => {
  const input = useInputEncoding(state.input, state.inputEncoding)

  const scope = {
    input,
    md5,
    sha1,
    sha224,
    sha256,
    sha384,
    sha512,
    sha3,
    rip,
  }

  try {
    const output = scopeEval(scope, state.expression.value)
    state.output.value = useOutputEncoding(output, state.outputEncoding)
  } catch (e) {
    // console.log(e)
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
  width: 800px;
  margin: 0 auto;
}
</style>
