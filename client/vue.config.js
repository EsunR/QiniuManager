module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": "D:\\Code\\GitProject\\Qiniu-Serve\\client\\src",
        components:
          "D:\\Code\\GitProject\\Qiniu-Serve\\client\\src\\components",
        views: "D:\\Code\\GitProject\\Qiniu-Serve\\client\\src\\views"
      }
    }
  },
  transpileDependencies: ["vuetify"]
}
