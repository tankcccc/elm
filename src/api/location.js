import axios from 'axios'

export function fetchLocation (){ //函数一定要有空格,设置你 的过期时间，时间太长了，咱们就撤销了。
	let options={
		timeout:5000
	}
	console.log('start')
	return new Promise((resolve, reject)=>{
		navigator.geolocation.getCurrentPosition((pos)=>{
			resolve(pos)
		},(err)=>{
			reject(err)
		},options)
	})
	console.log('end')
}



//根据经纬度获取地址信息
export function getAddress (latitude, longitude){
	let url = 'https://restapi.ele.me/bgs/poi/reverse_geo_coding'
	let params = {latitude, longitude}
	return new Promise((resolve, reject)=>{
		axios.get(url, {params}).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
//根据经纬度获取地址信息

//export function getAddress (latitude, longitude){
//	let url ='https://restapi.ele.me/bgs/poi/reverse_geo_coding'
//	let params = {latitude , longitude}
//	return new Promise((resolve, reject)=>{
//		axios.get(url, {params}).then(res=>{
//			resolve(res)
//		}).catch(err=>{
//			reject(err)
//		})
//	})
//}	
