<template>
  <div class="input-wrapper">
    <label for="input">输入:</label><br>
    <textarea spellcheck="false" v-model="input"></textarea>
  </div>
</template>

<script lang="ts" setup>
import {inject, Ref} from 'vue'

const input = inject('input') as Ref<string>
</script>

<style lang="scss" scoped>
.input-wrapper {
  flex: 1;
}
textarea {
  width: 100%;
  min-height: 200px;
  resize: none;
}
</style>
