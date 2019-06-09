//import axios from 'axios'

export function fetchLocation (){ //函数一定要有空格,设置你 的过期时间，时间太长了，咱们就撤销了。
	let options={
		timeout:5000
	}
	console.log('start')
	return new Promise((resolve,reject)=>{
		navigator.geolocation.getCurrentPosition((pos)=>{
			resolve(pos)
		},(err)=>{
			reject(err)
		},options)
	})
	console.log('end')
}




