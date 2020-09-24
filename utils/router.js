/**
 * uniapp封装跳转处理
 */

export class SipRouter {
	/**
	 * 解析出参数并且拼接到路由
	 * @param {string} url
	 * @param {Object} quer
	 */
	quertoStringPar(url, quer) {
		if (typeof quer == 'object') {
			let arr = []
			for (var i = 0; i < Object.keys(quer).length; i++) {
				let p = Object.keys(quer)[i]
				arr.push(`${p}=${quer[String(p)]}`)
			}
			return url + '?' + arr.join("&")
		} else return url
	}
	/**
	 * 保留当前页面，跳转到应用内的某个页面
	 * @param {string} url
	 * @param {Object} quer
	 */
	navigateTo(url, quer) {
		uni.navigateTo({
			url: this.quertoStringPar(url, quer)
		})
	}

	/**
	 * 关闭当前页面，跳转到应用内的某个页面。
	 * @param {string} url
	 * @param {Object} quer
	 */
	redirectTo(url, quer) {
		uni.redirectTo({
			url: this.quertoStringPar(url, quer)
		})
	}

	/**
	 * 关闭所有页面，打开到应用内的某个页面。
	 * @param {string} url
	 * @param {Object} quer
	 */
	reLaunch(url, quer) {
		uni.reLaunch({
			url: this.quertoStringPar(url, quer)
		})
	}

	/**
	 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	 * @param {string} url
	 * @param {Object} quer
	 */
	switchTab(url) {
		uni.switchTab({
			url
		})
	}

	/**
	 * 关闭当前页面，返回上一页面或多级页面
	 * @param {number} delta
	 */
	navigateBack(delta = 1) {
		uni.navigateBack({
			delta
		})
	}
	
	/**
	 * 获取当页的url参数
	 */
	getQuery() {
		// this.$router.history.current.query
	}

}
