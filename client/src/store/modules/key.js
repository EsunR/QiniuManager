import { getQiniuKeys, addQiniuKey, delQiniuKey } from "@/api/key"

const state = {
  qiniuKeys: []
}

const mutations = {
  SET_QINIU_KEYS: (state, value) => {
    state.qiniuKeys = value
  },
  ADD_QINIU_KEY: (state, value) => {
    state.qiniuKeys.unshift(value)
  },
  DEL_QINIU_KEY: (state, id) => {
    /** @type {Array} */
    let keys = state.qiniuKeys
    state.qiniuKeys = keys.filter(item => item.id !== id)
  }
}

const actions = {
  getQiniuKeys({ commit }) {
    getQiniuKeys().then(res => {
      const data = res.data
      commit("SET_QINIU_KEYS", data)
    })
  },
  addQiniuKey(
    { commit },
    { name, publicKey, privateKey, bucket, domain, zone }
  ) {
    let payload = { name, publicKey, privateKey, bucket, domain, zone }
    addQiniuKey(payload).then(res => {
      const data = res.data
      commit("ADD_QINIU_KEY", data)
    })
  },
  delQiniuKey({ commit }, id) {
    delQiniuKey(id).then(() => {
      commit("DEL_QINIU_KEY", id)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
