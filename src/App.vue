<template>
  <div id="app">
    <h1>E-Calculator</h1>
    <TheExpression />
    <div class="flex-container">
      <TheInput />
      <TheOutput />
    </div>

    <BuiltIn />
<!--    <MemoryInspector :data="input" />-->
  </div>
</template>

<script setup>
import {ref, provide, watchEffect} from 'vue'
import BuiltIn from "@/components/BuiltIn.vue"
import MemoryInspector from "@/components/MemoryInspector.vue"
import TheExpression from "@/components/TheExpression.vue"
import TheInput from "@/components/TheInput.vue"
import TheOutput from "@/components/TheOutput.vue"
import {strToUTF8Arr, base64EncArr, base64DecToArr, UTF8ArrToStr} from '@/utils'

const expression = ref('b64Dec(input)')
const input = ref('hello')
const output = ref('')

provide('expression', expression)
provide('input', input)
provide('output', output)

console.log(UTF8ArrToStr(base64DecToArr('aGVsbG8=')))

watchEffect(() => {
  const scope = {
    input: input.value,
    b64Enc: (input) => base64EncArr(strToUTF8Arr(input)),
    b64Dec: (input) => UTF8ArrToStr(base64DecToArr(input)),
  }

  try {
    output.value = scopeEval(scope, expression.value)
  } catch (e) {
    console.log(e)
  }
})

function scopeEval(context, expr) {
  const evaluator = Function.apply(null, [...Object.keys(context), 'expr', 'return eval("expr = undefined;" + expr)'])
  return evaluator.apply(null, [...Object.values(context), expr])
}
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
