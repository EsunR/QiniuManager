const state = {
  name: "",
  token: ""
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_TOKEN: (state, token) => {
    state.name = token
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
