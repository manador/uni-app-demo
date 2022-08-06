<template>
	<view class="celebrityList">
		<Celebrity :datalist='excellentList'></Celebrity>
	</view>
</template>

<script>
	import Celebrity from './Celebrity.vue'
	export default{
		props:{
			excellentList:{
				type:Array,
				default:{}
			}
		},
		components:{
			Celebrity
		}
	}
</script>

<style>
</style>
