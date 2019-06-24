import Vue from 'vue'
import * as types from './mutation-types'

export const AddCount = function ({ commit }, val) {
  commit(types.ADD_COUNT, val)
}
