<template>
	<view class="content" @tap="goto">
		<rich-text :nodes="content"></rich-text>
	</view>
</template>


<script>
	export default{
		data() {
			return {
				content: ''
			}
		},
		onLoad(e) {
			console.log(JSON.parse(decodeURIComponent(e.query)))
			console.log(this.$Route.query)
			e = JSON.parse(decodeURIComponent(e.query))
			// console.log(e)
			uni.request({
			    url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.id, //仅为示例，并非真实接口地址。
			    data: {
			        
			    },
				method: 'GET',
			    success: (res) => {
			        console.log(res);
					this.content = res.data.content
			    }
			});
		},
		methods: {
			goto() {
				this.$Router.push({ name: 'index' })
			}
		}
	}
</script>

<style>
</style>
