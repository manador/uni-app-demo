<template>
	<view class="consulting-help">
		<MyHeader title="咨询帮助"></MyHeader>
		<view class="help-content" v-if="dataList">
			<view class="help-item" v-for="item in dataList" :key='item.id'>
				<image class="item-address" src="../../static/imgs/address.png" mode=""></image>
				<view class="item-main">
					<view class="main-title">{{item.name}}</view>
					<view class="main-phone">{{item.phone}}</view>
				</view>
				<image class="item-phone" src="../../static/imgs/phone.png" mode=""></image>
			</view>
		</view>
		<view class="help-content" v-else>暂无数据···</view>
		<view class="help-sure">确认</view>
	</view>
</template>

<script>
	import MyHeader from '@/common/my-header/my-header.vue'
	import { getHelpList } from '@/servies/help.js'
	export default{
		data(){
			return{
				dataList:[],
				pageNum:1,
				pageSize:10
			}
		},
		components:{
			MyHeader
		},
		onLoad(){
			this.__init()
		},
		methods:{
			// 页面初始 请求数据
			async __init(){
				const data = {
					pageNum : this.pageNum,
					pageSize : this.pageSize
				}
				const res = await getHelpList(data)
				this.dataList = res
				console.log( this.dataList )
			}
		}
	}
</script>

<style scoped>
	.consulting-help{
		width: 100vw;
		height: 100vh;
		background-color: #F3F4F6;
	}
	.help-content{
		background-color: #FFFFFF;
	}
	.help-item{
		display: flex;
		align-items: center;
		padding: 40rpx;
		border-bottom: 2rpx solid #F3F4F6;
		box-sizing: border-box;
	}
	.help-item image{
		width: 33rpx;
		height: 36rpx;
	}
	.item-phone{
		padding: 20rpx;
	}
	.item-main{
		flex: 1;
		padding: 0 20rpx;
	}
	.main-title{
		font-size: 28rpx;
		font-weight: 400;
		color: #333333;
		padding-bottom: 20rpx;
	}
	.main-phone{
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		opacity: 0.8;
	}
	.help-sure{
		width: 420rpx;
		height: 80rpx;
		background: #0066FF;
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		font-size: 30rpx;
		font-weight: 400;
		position: absolute;
		left: 50%;
		bottom: 100rpx;
		transform: translateX(-50%);
	}
</style>
