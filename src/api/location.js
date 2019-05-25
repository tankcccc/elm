import axios from 'axios'

export function fetchLocation (){ //函数一定要有空格
	let options={
		timeout:5000
	}
	return new Promise((resolve,reject)=>{
		navigator.geolocation.getCurrentPosition((pos)=>{
			resolve(pos)
		},(err)=>{
			reject(error)
		},options)
	})
}




