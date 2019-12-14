import { fetchUserInfo } from "@/api/user"

const state = {
  name: ""
}

const mutations = {
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
