/**
 * 提示封装
 */

export class Tips {
	/**
	 * 显示提示框
	 * title: 显示标题
	 * duration: 多少秒后消失
	 * mask: 是否蒙层
	 */
	Toast(title, duration = 2000, mask = false) {
		uni.showToast({
			title,
			duration,
			mask,
			icon: 'none'
		});
	}

	/**
	 * 显示加载提示框
	 * title: 显示标题
	 * mask: 是否蒙层
	 */
	Loading(title = '加载中', mask = false) {
		uni.showLoading({
			title
		});
	}

	/**
	 * 隐藏加载提示框
	 */
	hideLoading() {
		uni.hideLoading();
	}

	/**
	 * 模态弹窗
	 */
	showModal(title = '提示', content = "请再次确认您的操作", resFun, cancelFun) {
		uni.showModal({
			title,
			content,
			success: function(res) {
				if (res.confirm) {
					resFun()
				} else if (res.cancel) {
					cancelFun()
				}
			}
		});
	}

	/**
	 * 操作菜单
	 */
	ActionSheet(itemList, handleClickItem) {
		uni.showActionSheet({
			itemList,
			success: function(res) {
				handleClickItem(res)
			},
			fail: function(res) {
				console.log(res.errMsg);
			}
		});
	}

}
