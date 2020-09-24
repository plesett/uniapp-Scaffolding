/**
 * 网络请求
 * -------------------
 * 请求类型: 
 * 请求参数:
 *  
 */
import Fly from "flyio/dist/npm/wx"
import store from "../store/index.js"
import {
	config
} from "@/config/index.js"

const fly = new Fly()

// 配置请求地址
fly.config.baseURL = config.host

// 拦截器 响应
fly.interceptors.response.use(
	response => {
		console.log(response, '<---response--')
		// 权限不足
		if (response.status == 401 || response.status == 403) {
			uni.showToast({
				title: '权限不足',
				icon: 'none'
			})
			// 清空缓存
			uni.clearStorage()
			// 路由跳转
		}
		// 500 错误
		if (response.status >= 500) {
			uni.showToast({
				title: '服务器错误啦~',
				icon: 'none'
			})
		}
		return response.data;
	},
	err => {
		if (err.message == "request:fail") {
			uni.showToast({
				title: '请检查您的网络连接',
				icon: 'none'
			})
		}
		return Promise.resolve("网络请求：ERROR！");
	}
)

// 拦截器 请求
fly.interceptors.request.use((config) => {
	config.headers['Authorization'] = "Bearer " + uni.getStorageSync("token")
	return config
})

export default fly;

// 微信登陆
export async function wxLogin() {
	if (store.state.equipment != "MP-WEIXIN") {
		uni.showToast({
			title: `当前设备为:${store.state.equipment}, 不支持方法 wxLogin() 方法调用`,
			icon: 'none'
		})
		console.log()
		return
	} else {
		return await new Promise((resolve, reject) => {
			uni.login({
				provider: 'weixin',
				success: (loginRes) => {
					resolve(loginRes)
				},
				fail: (e) => {
					reject(e)
				}
			});
		})
	}
}
