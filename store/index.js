import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		equipment: null,
		name: "我来自Vuex",
		count: 0
	},
	mutations: {
		setEquipment(state, info) {
			state.equipment = info
			console.log(`当前设备: ${info}`)
		},
		increase(state) {
			state.count += 1
		},
		reduce(state) {
			state.count -= 1
		},
		rest(state) {
			state.count = 0
		},
		setValue(state, countNum) {
			state.count = countNum
		}
	},
	actions: {

	},
	modules: {

	}
})
export default store
