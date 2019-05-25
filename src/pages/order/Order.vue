<template>
	<section>
		<elm-navbar :goBack='true' title='订单'></elm-navbar>
		<h2>订单</h2>
		<elm-tabbar></elm-tabbar>
	</section>
</template>

<script>
	import Tabbar from 	'@/components/footer/Tabbar'
	import Navbar from '@/components/header/Navbar'
	export default{
	components:{
		'elm-tabbar':Tabbar,
		'elm-navbar':Navbar
	}
}
</script>

<style lang="less" scoped>
</style>