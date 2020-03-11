import { fetchUserInfo } from "@/api/user"
import router from "@/router"
import Message from "@/components/Message/main"

const state = {
  login: false,
  name: ""
}

const mutations = {
  SET_LOGIN: (state, value) => {
    state.login = value
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  getUserInfo({ commit }) {
    fetchUserInfo()
      .then(res => {
        const { name, token } = res.data
        window.localStorage.setItem("token", token)
        commit("SET_NAME", name)
        commit("SET_LOGIN", true)
      })
      .catch(err => {
        console.log("action getuserinfo error:", err)
        // 获取用户信息出错，强行登出
        window.localStorage.removeItem("token")
        router.push({ name: "login" })
        Message({
          type: "error",
          message: "登录异常，请重新登录"
        })
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
