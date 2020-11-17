<template>
	<view>
		<view>
			<view>
				<swiper 
					:indicator-dots="true" 
					:autoplay="true" 
					:interval="5000" 
					:duration="1000"
					class="swiper"
				>
					<swiper-item v-for="(item, index) in bannerList" :key="index" class="swiper-item">
						<view>
							<image :src="item.pic" class="swiper-image"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: []
			}
		},
		onLoad() {
			this.getBannerList()
		},
		methods: {
			getBannerList() {
				this.$requestApi({
					url: "/banner",
					params: {
						type: 1
					}
				}).then(res => {
					this.bannerList = res.banners
				})
			}
		}
	}
</script>

<style>
	.swiper {
		width: 750rpx;
		height: 460rpx;
	}
	.swiper-item {
		border-radius: 0 0 10px 10px;
	}
	.swiper-image {
		width: 100%;
	}


	
</style>
