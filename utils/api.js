const BASE_URL = 'http://localhost:8082'

export const myRequest = (options) => {
 // 在这里可以对请求头进行一些设置
 // 例如：
 // options.header = {
// 		"Content-Type": "application/x-www-form-urlencoded"
// }
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url || '',
			method: options.method || 'GET',
			data: options.data || {},
			header: options.header || {} ,
			success: (res) => {
				if(res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '获取数据失败'
				})
				reject(err)
			}
		})
	});
}

//  const get = (url, data, options = {}) => {
// 	options.method = 'GET';
// 	options.data = data;
// 	options.url = url;
// 	return request(options)
// }

// const post = (url, data, options = {}) => {
// 	options.method = 'POST';
// 	options.data = data;
// 	options.url = url;
// 	return request(options)
// }



