<template>
	<view class="home-item">
		<view class="item-main" @tap="goStart(item)" :style="{backgroundImage:'url(' + classImgLink + ')'}">
			<view class="item-content">
				<image class="left-arrow" src="../../static/imgs/right-arrow.png" mode=""></image>
				<view class="item-text">{{item.className}}</view>
				<image src="../../static/imgs/right-arrow.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:{
				type:Object,
				default:{}
			}
		},
		data(){
			return {
				classImgLink:''
			}
		},
		computed:{
			changeImg(){
				return this.classImgLink = this.item.classImgLink
			}
		},
		methods:{
			goStart(item){
				uni.navigateTo({
					url:'../../pages/start-school/start-school?item=' + JSON.stringify(item)
				})
			}
		}
	}
</script>

<style scoped>
	.home-item{
		width: 320rpx;
		height: 404rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 24rpx 38rpx 0rpx rgba(60,128,209,0.09);
		border-radius: 30rpx;
		position: relative;
		margin-bottom: 40rpx;
	}
	.item-main{
		width: 294rpx;
		height: 371rpx;
		/* background: url('https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/369091cb-f375-47fe-b2d6-5cdd37a6d676.png'); */
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		top: 15rpx;
		left: 10rpx;
	}
	.item-content{
		padding-top: 290rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
	}
	.item-content image{
		width: 30rpx;
		height: 20rpx;
	}
	.left-arrow{
		transform: rotate(180deg);
	}
	.item-text{
		font-size: 36rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #FFFFFF;
		padding: 0 20rpx;
	}
</style>
