import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: actions,
  state: state,
  mutations: mutations,
  strict: process.env.NODE_ENV !== 'production'
})
