<template>
  <n-notification-provider :max="1">
    <App />
  </n-notification-provider>
</template>

<script lang="ts" setup>
import { NNotificationProvider } from "naive-ui"
import App from "@/App.vue"
</script>
