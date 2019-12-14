import Vue from "vue"
import Vuetify from "vuetify/lib"
import "@mdi/font/css/materialdesignicons.css"
import Message from "@/components/Message/main.js"

Vue.use(Vuetify)
Vue.prototype.$message = Message

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
})
