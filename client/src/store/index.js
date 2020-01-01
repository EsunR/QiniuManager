import Vue from "vue"
import Vuex from "vuex"
import getters from "./getter"
// modules:
import user from "./modules/user"
import app from "./modules/app"
import key from "./modules/key"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    app,
    key
  },
  getters
})
