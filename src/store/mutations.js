import * as types from'./mutation-types'

export default{
	//设置经度和纬度
	[types.RECEIVE_LOCATION] (state, pos){   //函数的名字是一个常量，我定义好的，普通的直接写死，常量就加一个中括号
    	state.latitude = pos.latitude
    	state.longitude = pos.longitude
	}
}
