/*
* 咨询帮助的接口管理
*/
import $http from './request.js'

// 咨询帮助列表信息 
// /wechat/help/list
export const getHelpList = ({pageSize,pageNum}) => {
	return $http.request({
		url:'/wechat/help/list',
		method:'POST',
		header:{
			"Content-Type":"application/json"
		},
		data:{
			pageNum,
			pageSize
		}
	})
}