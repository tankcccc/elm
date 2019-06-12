<template>
	<transition name='slide'>
		<section class="address">
			<elm-navbar></elm-navbar>
			<h3>手动搜索地址</h3>
		</section>
	</transition>
</template>

<script>
	import Navbar from '@/components/header/Navbar'
	//注册组件
	export default{
		components: {
		'elm-navbar':Navbar
		}
	}
	
</script>

<style lang="less" scoped>
</style>