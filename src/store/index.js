import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

//定义初始状态
const state={
	latitude:'',	
	longitude:''
}

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
