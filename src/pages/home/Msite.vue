<template>
	<section class="home">
	<!--	<h2>首页</h2>-->
		<!--导航头-->
		<header>
			<div class="location">
			  <svg class="icon-location">
	                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
	          </svg>
	          <span>{{address.msg}}</span>
	          <svg class="icon-arrow">
	                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
	           </svg>
			</div>
			<div class="weather">
				天气
			</div>
		</header>
		<!--搜索-->
		<section class="search">
	      <div>
	        <a href="#">
	          <svg>
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
	          </svg>
	          <span>搜索商家、商品名称</span>
	        </a>
	      </div>
		</section>
		<!--首页内容-->	
		<section class="content">
			<div class="entries">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 490">
					<defs>
						<path id="b" d="M0 0h1080v489H0z"/>
						<filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
							<feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/>
						</filter>
					</defs>
					<g fill="none" fill-rule="evenodd"><g>
						<use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/>
					</g>
					<g fill="#F6F6F6">
						<g transform="translate(76 36)">
							<path d="M9 139h100v34H9z"/>
							<ellipse cx="59" cy="59" rx="59" ry="59"/></g>
							<g transform="translate(346 36)">
								<path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/>
							</g>
							<g transform="translate(616 36)">
								<path d="M9 139h100v34H9z"/>
									<ellipse cx="59" cy="59" rx="59" ry="59"/></g>
									<g transform="translate(886 36)"><path d="M9 139h100v34H9z"/>
										<ellipse cx="59" cy="59" rx="59" ry="59"/></g></g><g fill="#F6F6F6"><g transform="translate(76 252)">
											<path d="M9 139h100v34H9z"/>
											<ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(346 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(616 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g><g transform="translate(886 252)"><path d="M9 139h100v34H9z"/><ellipse cx="59" cy="59" rx="59" ry="59"/></g></g></g></svg>
			</div>
			<div class="activity">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 296">
					<defs><linearGradient id="c" x1="50%" x2="50%" y1="95.5%" y2="4.603%"><stop offset="0%" stop-color="#FAFAFA"/>
						<stop offset="100%" stop-color="#FAFAFA"/>
					</linearGradient>
					</defs>
					<g fill="url(#c)" fill-rule="evenodd">
						<path d="M248 153h117v133H248V153zm59 121c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zm-34-106v18h68v-18h-68zm9 23v14h50v-14h-50zM129 153h116v133H129V153zm58 121c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zm-34-106v18h68v-18h-68zm9 23v14h50v-14h-50zM10 153h116v133H10V153zm58 121c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zM34 168v18h68v-18H34zm9 23v14h50v-14H43zM189 10h176v140H189V10zm138 129c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zM202 22v18h68V22h-68zm0 24v14h89V46h-89zm0 20v14h78V66h-78zM10 10h176v140H10V10zm137 129c14.912 0 27-12.088 27-27s-12.088-27-27-27-27 12.088-27 27 12.088 27 27 27zM25 22v18h68V22H25zm0 24v14h89V46H25zm0 20v14h78V66H25z"/>
					</g>
				</svg>
			</div>
			<h3>推荐书商家</h3>
			<div class="restaurant">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 261"><defs><path id="b" d="M0 0h1080v260H0z"/><filter id="a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dy="-1" in="SourceAlpha" result="shadowOffsetOuter1"/><feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"/></filter></defs><g fill="none" fill-rule="evenodd" transform="translate(0 1)"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" xlink:href="#b"/><path fill="#F6F6F6" d="M230 44h533v46H230z"/><rect width="172" height="172" x="30" y="44" fill="#F6F6F6" rx="4"/><path fill="#F6F6F6" d="M230 118h369v30H230zM230 182h323v30H230zM812 115h238v39H812zM808 184h242v30H808zM917 48h133v37H917z"/></g></svg>
			</div>
		</section>
		<elm-tabbar></elm-tabbar>
	</section>
</template>

<script>
import Tabbar from 	'@/components/footer/Tabbar'
//import {fetchLocation} from '@/api/location'
import { mapActions } from 'vuex'
export default{
	data(){
		return{
			address:{
				code:1,
				msg: '正在定位中...'
			}
		}
	},
	components:{
		'elm-tabbar':Tabbar
	},
//	created (){
//		fetchLocation().then(pos=>{
//			console.log(pos)
//		}).catch(err=>{
//			console.log(err)
//		})
//	}
	methods: {
		...mapActions([
			'getLocation'
			])
	},
	created(){
		this.getLocation()
	}
}
</script>

<style lang="less" scoped>
	*{box-sizing: border-box;}
	header{
		padding: 0.266667rem 0.373333rem 0rem;
		width: 100%;
		height: 0.92rem;
		background-image:linear-gradient(90deg,#0af,#0085ff) ;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		.location{
			 width: 60%;
          	 font-weight: 700;
          	 display: flex;
          	 align-items: center;
			.icon-location{
				width: 0.346667rem;
             	height: 0.413333rem;
              	fill: #fff;
			}
			 .icon-arrow {
              width: 0.186667rem;
              height: 0.093333rem;
              fill: #fff;
          }
          span{
          	 margin: 0 0.133333rem;
          	 font-size: 0.453333rem;
          	 max-width: 80%;
          	 white-space: nowrap;
             overflow: hidden;
             text-overflow: ellipsis;
          }
		}
		.weather{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
	}
	.search {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    margin-top: -2px;
    div {
        width: 100%;
        padding: 0.2rem 0.373333rem;
        margin: -.013333rem 0;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        a {
            width: 100%;
            height: 0.96rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 0.026667rem;
            font-size: 0.346667rem;
            font-weight: 0.346667rem;
            color: #666;
            text-decoration: none;
        }
        svg {
                width: 0.32rem;
                height: 0.32rem;
                margin-right: 0.133333rem;
            }
    }
  }
  .content{
  	svg{
  		width: 100%;
  	}
  	h3{
  	  margin-top: .266667rem;
      font-weight: 600;
      background:#fff;
      border-top: 1px solid #eee;
      font-size: .426667rem;
      padding: .426667rem .266667rem 0;
  	}
  }
</style>