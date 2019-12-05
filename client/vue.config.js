module.exports = {
  "configureWebpack": {
    "resolve": {
      "alias": {
        "@": "D:\\Code\\GitProject\\Qiniu-Serve\\client\\src",
        "components": "D:\\Code\\GitProject\\Qiniu-Serve\\client\\src\\components",
        "views": "D:\\Code\\GitProject\\Qiniu-Serve\\client\\src\\views"
      }
    }
  },
  "css": {
    "loaderOptions": {
      "sass": {
        "prependData": "@import \"~@/style/variable.scss\";"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}