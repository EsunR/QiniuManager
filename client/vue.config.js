const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        components: resolve("src/components"),
        views: resolve("src/views")
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // scss 配置要求必须有分号 https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
        prependData: `@import "~@/style/variable.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"]
}
