const state = {
  tabList: []
}

const types = {
  'TAB_LIST': 'tabList'
}

const actions = {
  setTabList({ commit }, res) {
    commit(types.TAB_LIST, res)
  }
}

const mutations = {
  [types.TAB_LIST] (state, data) {
    state.tabList = data
  }
}

const getters = {
  getTabList: state => state.tabList
}

export default {
  state,
  actions,
  mutations,
  getters
}