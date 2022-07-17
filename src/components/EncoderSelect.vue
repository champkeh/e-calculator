<template>
  <div class="wrapper">
    <n-radio-group
      :value="props.value"
      :on-update:value="(value) => emit('update:value', value)"
    >
      <n-radio-button
        v-for="encoder in encoders"
        :key="encoder"
        :value="encoder"
        :label="encoder"
      />
    </n-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { NRadioGroup, NRadioButton } from "naive-ui"

const props = defineProps({
  value: {
    type: String,
    default: "UTF-8",
  },
  type: {
    type: String,
    default: "input",
  },
})
const emit = defineEmits(["update:value"])

const encoders: string[] =
  props.type === "input"
    ? ["UTF-8", "Base64", "Hex", "Latin1", "UTF-16", "UTF-16LE"]
    : ["Base64", "Hex", "Latin1", "UTF-8", "UTF-16", "UTF-16LE"]
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
