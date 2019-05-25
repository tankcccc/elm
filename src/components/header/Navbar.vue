<template>
	<header>
		<div class="navbar">
			<section class="back" v-if='goBack'>
				<svg>
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
				</svg>
			</section>
			<h1>{{title}}</h1>
		</div>
	</header>
</template>

<script>
	export default{
		props:{
			goback:{
				type: Boolean,
				default: false
			},
			title:{
				type: String,
				default:''
			}
		}

	}
</script>

<style lang="less" scoped="">
	header{
		height: 1.173333rem;
		.navbar{
			position: fixed;
			top: 0;
			left: 0;
			background-image: linear-gradient(90dge ,#0af,#0085ff);
			width: 100%;
			height: 1.173333rem;
			background: #2395ff;
			font-size: .48rem;
			color: #fff;
			.back{
				
				width: 1.73333rem;
				height: 1.173333rem;
				display: flex;
				justify-content: center;
				align-items: center;
				svg{
					width:.586667rem;
					height: .586667rem;
				}
			}
			h1{
				position: absolute;
				top: 0;
				left: 50%;
				transform: translateX(-50%);
				max-width:50%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				height: 1.173333rem;
				line-height: 1.173333rem;
				font-weight:700 ;
				font-size:1em ;
			}
		}
	}
</style>