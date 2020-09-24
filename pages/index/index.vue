<template>
	<view class="content">
		<view class="text-area">
			<text class="title" @click="go">{{title}}</text>
		</view>
		<view class="text-area">{{name}}</view>
		<h1>{{count}}</h1>
		<view>
			<button type="default" @click="reduce">-</button>
			<button type="default" @click="increase">+</button>
			<button type="default" @click="rest">恢复为 0</button>
			<input type="text" value="" v-model="value" />
			<button type="default" @click="setValue(value)">设置为输入框里数值</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	import {
		test
	} from "@/api/test.js"
	export default {
		data() {
			return {
				title: '你好世界!',
				value: 1
			}
		},
		onLoad() {
			test().then(res => {
				console.log(res, '<---res')
			})
		},
		computed: {
			...mapState(['name', 'count'])
		},
		methods: {
			...mapMutations(['increase', 'reduce', 'rest', 'setValue']),
			go: function() {
				this.$sipRouter.redirectTo("/pages/test/test", {
					id: 1,
					name: "zhanasha"
				})
			}
		}
	}
</script>

<style lang="less">
	.text-area {
		display: flex;
		justify-content: center;
		margin: 30px 0;

		.title {
			text-align: center;
			font-size: 25px;
			font-weight: bold;
		}
	}

	.content {
		&>h1 {
			text-align: center;
		}

		input {
			margin: 20px 0;
			padding: 10px;
			border: 1px solid #000000;
		}
	}
</style>
