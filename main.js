import Vue from 'vue'
import App from './App'
import store from './store'
import { Tips } from '@/utils/tips.js'
import { SipRouter } from '@/utils/router.js'

const tips = new Tips()
const sipRouter = new SipRouter()

Vue.prototype.$tips = tips
Vue.prototype.$sipRouter = sipRouter
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

// 判断当前设备端
// #ifdef APP-PLUS
store.commit("setEquipment", 'APP')
// #endif

// #ifdef MP-WEIXIN
store.commit("setEquipment", 'MP-WEIXIN')
// #endif

// #ifdef H5
store.commit("setEquipment", 'H5')
// #endif



const app = new Vue({
	...App,
	store
})
app.$mount()
