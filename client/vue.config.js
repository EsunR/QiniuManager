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
      sass: {
        // eslint-disable-next-line quotes
        prependData: `@import "~@/style/variable.scss";`
      }
    }
  }
}
