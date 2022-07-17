<template>
<div class="wrapper">
  <label for="expression">表达式:</label><br>
  <textarea id="expression" v-model="expression"></textarea>
</div>
</template>

<script lang="ts" setup>
import {inject, Ref} from 'vue'

const expression = inject('expression') as Ref<string>
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  resize: none;
  font-family: monospace;
  font-size: 20px;
  height: 100px;
}
</style>
