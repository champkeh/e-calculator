<template>
  <label for="memory-inspector">Memory Inspector:</label>
  <div id="memory-inspector">
    <div class="data-view">
      <span
        v-for="digit in dataBuffer"
        :key="digit"
        class="cell"
        :class="{ select: digit === 50 }"
      >
        {{ digit.toString(16) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { strToUTF8Arr } from '@/utils'
import { ref, watchEffect } from "vue"

defineProps<{
  data: string
}>()

const dataBuffer = ref<Uint8Array>()
watchEffect(() => {
  // dataBuffer.value = strToUTF8Arr(props.data)
  console.log(dataBuffer.value)
})
</script>

<style lang="scss" scoped>
label {
  display: block;
  margin-top: 20px;
}

.data-view {
  display: flex;
  flex-wrap: wrap;
  width: 455px;
  padding-left: 5px;
  font-family: monospace;

  // background-color: red;
  font-size: 14px;

  // overflow: hidden;
  border-right: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;

  .cell {
    display: block;
    padding: 0 4px;

    // background-color: #0299be;
    margin: 5px 0;

    &:nth-child(4n) {
      margin-right: 15px;
    }

    &:nth-child(16n) {
      margin-right: 5px;
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
