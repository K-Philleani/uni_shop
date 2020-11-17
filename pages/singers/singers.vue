<template>
	<view>
		<view></view>
		
		<view>
			<view class="nav-bar">
				<text :class="{'nav-bar-checked': field == 1 }" class="nav-bar-item" @click="selectFields(1)">华语</text>
				<text :class="{'nav-bar-checked': field == 2 }" class="nav-bar-item" @click="selectFields(2)">欧美</text>
				<text :class="{'nav-bar-checked': field == 3 }" class="nav-bar-item" @click="selectFields(3)">韩国</text>
				<text :class="{'nav-bar-checked': field == 4 }" class="nav-bar-item" @click="selectFields(4)">日本</text>
			</view>
			<scroll-view scroll-y="true" >
				<view class="list-item" v-for="(item, index) in singerList" :key="index">
					<image :src="item.picUrl" mode="" class="list-images" lazy-load="true"></image>
					<view>{{item.name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getSingers(this.field)
		},
		data() {
			return {
				singerList: [],
				field: 1
			}
		},
		methods: {
			getSingers(index) {
				this.$requestApi({
					url: '/toplist/artist',
					params: {
						type: index
					}
				}).then(res => {
					this.singerList = res.list.artists
				})
			},
			selectFields(index) {
				this.field = index
				this.singerList = []
				this.getSingers(this.field)
			}
		}
	}
</script>

<style>
	.nav-bar {
		width: 750rpx;
		height: 100rpx;
		padding: 10rpx 0 0 20rpx;
		line-height: 100rpx;
	}
	.nav-bar-item {
		margin: 0 20rpx;
		/* cursor: pointer; */
	}
	.nav-bar-checked{
		color: #B50E03;
	}
.list-item {
	width: 750rpx;
	height: 120rpx;
	border-bottom: 1px solid #DDDDDD;
	padding: 20rpx;
	display: flex;
	align-items: center;
}
.list-images {
	width: 120rpx;
	height: 120rpx;
	border-radius: 16rpx;
	margin-right: 40rpx;
}
</style>
