import { defineConfig } from "vite"
import { join } from "path"
import vue from "@vitejs/plugin-vue"
import legacy from "@vitejs/plugin-legacy"
import Inspect from "vite-plugin-inspect"

function resolve(dir: string) {
    return join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        base: '/',
        resolve: {
            alias: {
                "@": resolve("src"),
                "@api": resolve("src/service/api"),
                "@status": resolve("src/service/status"),
                "@images": resolve("src/assets/images"),
                "~@images": resolve("src/assets/images"),
            },
        },
        plugins: [
            vue(),
            legacy({
                targets: ["defaults", "not IE 11"],
            }),
            Inspect(),
        ],
        server: {
            host: "0.0.0.0",
            port: 8080,
            open: false,
        },
    }
})
