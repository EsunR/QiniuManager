import { fetchUserInfo } from "@/api/user"

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
        console.log(err)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
