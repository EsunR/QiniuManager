import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import config from "./config"
import "./style/index.scss"

Vue.config.productionTip = false
Vue.prototype.$global = config

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app")
