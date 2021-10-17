<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item v-for="(swiper,index) in swiperList" :key="swiper.id">
				<image :src="swiper.img"/>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(nav,index) in navs" :key="index" @click="navItemClick(nav.path)">
				<view :class="nav.icon"></view>
				<text>{{nav.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goodsList="goodsList"></goods-list>
		</view>
	</view>
</template>
<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swiperList:[],
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
					}
				],
				goodsList:[]
			}
		},
		onLoad() {
			this.getSwipers(),
			this.getGoods()
		},
		methods: {
			// 请求获取轮播图
			async getSwipers () {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swiperList = res.data.message
			},
			// 请求获取商品列表
			async getGoods () {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goodsList = res.data.message
			},
			navItemClick (url) {
				uni.navigateTo({
					url
				})
			},
			
		},
		components:{"goods-list":goodsList}
	}
	
</script>
<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.nav {
			display: flex;
			.nav_item {
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background: #007AFF;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
				.icon-tupian{
					font-size: 45rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit{
				height: 50px;
				line-height: 50px;
				color: #007AFF;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
		
	}
</style>