import { createApp } from "vue"
import App from "@/AppWrapper.vue"

// 引入全局样式
import "@/styles/index.scss"

const app = createApp(App)

app.mount("#app")
