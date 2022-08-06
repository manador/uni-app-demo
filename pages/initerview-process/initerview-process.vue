<template>
	<view class="initerview-process">
		<MyHeader :isBack="false" title="面试求职流程"></MyHeader>
		<view class="process">
			<view class="process-content">
				<!-- 面试流程组件 -->
				<ProcessItem :processList='processList'></ProcessItem>
			</view>
		</view>
		<my-tabbar :selected="selected"></my-tabbar>
	</view>
</template>

<script>
	import MyHeader from '@/common/my-header/my-header.vue'
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	import { processList } from '@/servies/process.js'
	import ProcessItem from '@/compontent/process/process-item.vue'
	export default {
		data() {
			return {
				selected: 2,
				pageNum:1,
				pageSize:10,
				processList:[]
			}
		},
		components: {
			MyHeader,
			MyTabbar,
			ProcessItem
		},
		onLoad(){
			this.__init()
		},
		computed:{
			changeList(){
				this.processList.map(item => {
					item.interviewProcessAttrs.map( tem =>{
						//判断是否有视频
						if( tem.objType === 2 ){
							item.isVideo = true
						}else{
							item.isVideo = false
						}
					} )
				})
			}
		},
		methods:{
			async __init(){
				const params = {
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				const res = await processList(params)
				console.log( res,'流程' )
				this.processList = res
			}
		}
	}
</script>

<style scoped>
	page{
		height: auto;
	}
	.process{
		width: 750rpx;
		padding-top: 20rpx;
		padding-bottom: 120rpx;
		background-image: url('https://fawnuat.xuexiluxian.cn/api/profile/wechat/bgimg/process-bg.png');
		background-size: cover;
		background-position: center center;
		box-sizing: border-box;
		position: relative;
	}
	.process-content{
		width: 750rpx;
		height: 100%;
		position: absolute;
		top: 0;
		left: 10rpx;
		position: relative;
		padding-bottom: 40rpx;
	}
</style>
