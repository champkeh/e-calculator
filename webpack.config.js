const { join } = require("path")

function resolve(dir) {
  return join(__dirname, dir)
}

module.exports = {
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      "@": resolve("src"),
      "@api": resolve("src/service/api"),
      "@status": resolve("src/service/status"),
      "@images": resolve("src/assets/images"),
      "~@images": resolve("src/assets/images"),
    },
  },
}
