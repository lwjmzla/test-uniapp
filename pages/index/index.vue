<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" @tap="goto(item.post_id)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
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
				title: 'Hello',
				list: []
			}
		},
		onLoad() {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news', //仅为示例，并非真实接口地址。
				data: {

				},
				method: 'GET',
				success: (res) => {
					console.log(this);
					this.list = res.data
				}
			});
			//let str:string = '123';
			//console.log(str)
		},
		methods: {
			goto(id) {
				// uni.navigateTo({
				// 	url: '/pages/detail/index?id=' + id
				// });
				// this.$Router.push({ path: '/pages/detail/index?id=' + id })  // !这样竟然报错
				this.$Router.push({ path: '/pages/detail/index', query: { id: id } })
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
