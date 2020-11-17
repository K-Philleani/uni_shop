const HOST = "http://124.70.71.78:3000"

const requestApi = ({ methods, url, params={}  }) => {
	const data = {...params}
	return new Promise((resolve, reject) => {
		uni.request({
			method: methods ? methods : 'GET',
			url: `${HOST}${url}`,
			data,
			header: {
				"content-type": "application/json"
			},
			success(res) {
				if (res.statusCode === 200) {
					resolve(res.data)
				} else {
					reject(res.errMsg)
					uni.showToast({
						title: res.errMsg
					})
				}
			}
		})
	})
}


export default requestApi