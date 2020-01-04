import {
  getQiniuKeys,
  addQiniuKey,
  delQiniuKey,
  updateQiniuKey
} from "@/api/key"

const state = {
  qiniuKeys: []
}

const mutations = {
  SET_QINIU_KEYS: (state, keys) => {
    state.qiniuKeys = keys
  },

  ADD_QINIU_KEY: (state, key) => {
    state.qiniuKeys.unshift(key)
  },

  DEL_QINIU_KEY: (state, id) => {
    /** @type {Array} */
    const keys = state.qiniuKeys
    state.qiniuKeys = keys.filter(key => key.id !== id)
  },

  UPDATE_QINIU_KEY: (state, newVal) => {
    /** @type {Array} */
    const keys = state.qiniuKeys
    const id = newVal.id
    state.qiniuKeys = keys.map(key => (key.id === id ? newVal : key))
  }
}

const actions = {
  async getQiniuKeys({ commit }) {
    const keys = (await getQiniuKeys()).data
    commit("SET_QINIU_KEYS", keys)
  },

  async addQiniuKey(
    { commit },
    { name, publicKey, privateKey, bucket, domain, zone }
  ) {
    let payload = { name, publicKey, privateKey, bucket, domain, zone }
    let kye = (await addQiniuKey(payload)).data
    commit("ADD_QINIU_KEY", kye)
  },

  async delQiniuKey({ commit }, id) {
    await delQiniuKey(id)
    commit("DEL_QINIU_KEY", id)
  },

  async updateQiniuKey(
    { commit },
    { id, name, publicKey, privateKey, bucket, domain, zone }
  ) {
    let payload = { id, name, publicKey, privateKey, bucket, domain, zone }
    let newVal = (await updateQiniuKey(payload)).data
    commit("UPDATE_QINIU_KEY", newVal)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
