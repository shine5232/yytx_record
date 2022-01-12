import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN(state, v) {
      state.token = v
    }
  },
  actions: {
    setToken({commit}, data) {
      commit('SET_TOKEN',data)
    }
  },
  getters: {

  }
});
export default store
