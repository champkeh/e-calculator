<template>
  <div class="wrapper">
    <label for="memory-inspector">Memory Inspector:</label>
    <button @click="close">关闭</button>
    <div class="data-view">
      <span
        v-for="(digit, idx) in u8Array"
        :key="idx"
        class="cell"
        :data-idx="formatAddress(idx)"
      >
        {{ formatDigit(digit) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watchEffect, inject, toRaw, ref } from "vue"
import { convertWordArrayToUint8Array } from "@/utils"

const memory = (inject("state") as any).memory
const u8Array = ref()

watchEffect(() => {
  const wordArray = toRaw(memory.value)
  if (wordArray) {
    u8Array.value = convertWordArrayToUint8Array(wordArray.words)
    console.log(u8Array.value)
  }
})

function formatDigit(digit: number) {
  return ("0" + digit.toString(16)).slice(-2)
}
function formatAddress(idx: number) {
  return ("0".repeat(8) + idx.toString(16)).slice(-8)
}

const emit = defineEmits(["close"])

function close() {
  emit("close")
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

label {
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
}

button {
  position: absolute;
  top: 0;
  right: 0;
}

.data-view {
  display: flex;
  flex-wrap: wrap;
  width: 455px;
  padding-left: 5px;
  margin-left: 100px;
  font-family: monospace;

  // background-color: red;
  font-size: 14px;
  border-right: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;

  .cell {
    display: block;
    padding: 0 4px;

    &:nth-child(4n) {
      margin-right: 15px;
    }

    &:nth-child(16n) {
      margin-right: 5px;
    }

    &:nth-child(16n + 1) {
      position: relative;

      &::before {
        position: absolute;
        left: -80px;
        color: #c4c4c4;
        content: attr(data-idx);
      }
    }

    &.select {
      background-color: #9ebfecff;
      border-radius: 3px;
    }
  }
}

.cell {
  // display: inline-block;
  // margin: 5px 5px;
  // cursor: unset;
  // &:nth-child(4n) {
  //  margin-right: 20px;
  // }
  // &:nth-child(16n) {
  //  margin-right: 100px;
  // }
}
</style>
