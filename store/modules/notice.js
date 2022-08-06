export default{
	state:{
		noticeInfo:null
	},
	getters:{
		
	},
	mutations:{
		addNoticeInfo(state,option){
			state.noticeInfo = option
		}
	},
	actions:{
		addNoticeActions({commit},option){
			commit('addNoticeInfo',option)
		}
	}
}