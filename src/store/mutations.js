import * as types from './mutation-types'

const mutations = {
  [types.ADD_COUNT] (state, flag) {
    state.count++
  }
}

export default mutations