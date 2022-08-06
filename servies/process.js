/**
 *  面试流程接口信息
 */
import $http from './request.js'

// 面试流程 
// /wechat/process/list 
export const processList = ({pageNum,pageSize}) => {
	return $http.request({
		url:'/wechat/process/list',
		method:'POST',
		header:{
			'Conten-Type':'application/json'
		},
		data:{
			pageNum,
			pageSize
		}
	})
}