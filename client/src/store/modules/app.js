const state = {
  showNavigation: false
}

const mutations = {
  SET_SHOWNAVIGATION: (state, option) => {
    state.showNavigation = option
  }
}

const actions = {
  toggleNavigation({ commit, state }) {
    commit("SET_SHOWNAVIGATION", !state.showNavigation)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
