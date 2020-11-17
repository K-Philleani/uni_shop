<template>
	<view>
		<view>
			<view class="banner">
				<swiper 
					:autoplay="true" 
					:interval="5000" 
					:duration="1000"
					class="swiper"
				>
					<swiper-item v-for="(item, index) in bannerList" :key="index" class="swiper-item">
						<!-- <image :src="item.pic" mode="heightFix" class="swiper-image"></image> -->
						<view class="swiper-image" :style="{backgroundImage: 'url(' + item.pic + ')'}"></view>
					</swiper-item>
				</swiper>
			</view>
			
			<view class="music-list">
				<view class="list-title">推荐歌单</view>
				<view class="list-block">
					<view 
						class="list-item" 
						v-for="(item, index) in songList" 
						:key="index"
					>
						<view>
							<image :src="item.picUrl" mode="" class="list-image"></image>
						</view>
						<view class="list-name">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [],
				songList: []
			}
		},
		onLoad() {
			this.getBannerList()
			this.getMusicList()
		},
		methods: {
			getBannerList() {
				this.$requestApi({
					url: "/banner",
					params: {
						type: 3
					}
				}).then(res => {
					this.bannerList = res.banners
				})
			},
			getMusicList() {
				this.$requestApi({
					url: '/personalized'
				}).then(res => {
					this.songList = res.result
				})
			}
		}
	}
</script>

<style>
	.banner {
		width: 700rpx;
		margin: 10rpx auto;
	}
	.swiper-image {
		width: 700rpx;
		height: 400rpx;
		background-size: contain;
		background-repeat: no-repeat;
	}
	
	
	.list-title {
		margin: 5px
	}
	.list-block {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 10rpx;
	}
	.list-item {
		margin-top: 4rpx;
		width: 230rpx;
		height: 380rpx;
	}
	.list-image {
		width: 230rpx;
		height: 268rpx;
	}
	.list-name {
		font-size: 22rpx;
	}

	
</style>
