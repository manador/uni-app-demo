// 登录接口信息

import $http from './request.js'

export const authLogin = ( {code} ) => {
	return $http.request({
		url:'/wechat/user/auth/login',
		method:'POST',
		header:{
			'Conten-Type':'application/json'
		},
		data:{
			code
		}
	})
}