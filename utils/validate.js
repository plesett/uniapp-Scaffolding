/**
 * 手机号码验证
 * @param {string} mobile
 */
export const phoneCheck(mobile) {
	if (mobile.match(/^(?:13\d|15[89])-?\d{5}(\d{3}|\*{3})$/) == null) {
		return false;
	} else {
		return true;
	}
}

/**
 * 验证字段必须完全由字母构成。
 * @param {string} str
 */
export const letterCheck(str) {
	if (str.match(/^[\w]+$/) == null) {
		return false;
	} else {
		return true;
	}
}

/**
 * 只能包含由字母、数字，以及 - 和 _
 * @param {string} str
 */
export const dashNumStrCheck(str) {
	if (str.match(/^[\w\d_-]+$/) == null) {
		return false;
	} else {
		return true;
	}
}

/**
 * 必须是完全是字母、数字
 * @param {string} str
 */
export const dashNumCheck(str) {
	if (str.match(/^[\w\d]+$/) == null) {
		return false;
	} else {
		return true;
	}
}

/**
 * 正确的金额
 * @param {string} money
 */
export const moneyCheck(money) {
	if (money.match(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/) == null) {
		return false;
	} else {
		return true;
	}
}

/**
 * 只能是汉字
 * @param {string} str
 */
export const chineseCheck(str) {
	if (str.match(/^[\u4e00-\u9fa5]+$/) == null) {
		return false;
	} else {
		return true;
	}
}

/**
 * 检查输入的邮箱格式是否正确
 * 输入:str  字符串
 * 返回:true 或 flase; true表示格式正确
 */
function emailCheck(str){
    if (str.match(/[A-Za-z0-9_-]+[@](\S*)(net|com|cn|org|cc|tv|[0-9]{1,3})(\S*)/g) == null) {
        return false;
    }
    else {
        return true;
    }
}