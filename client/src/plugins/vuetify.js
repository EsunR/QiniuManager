import Vue from "vue"
import Vuetify from "vuetify/lib"
import "@mdi/font/css/materialdesignicons.css"
import Message from "@/components/Message/main.js"
import Alert from "@/components/Alert/main.js"

Vue.use(Vuetify)
Vue.prototype.$message = Message
Vue.prototype.$alert = Alert

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
})
