const apiurl = process.env.PRODUCTION
	? "https://kvisoi.club/flaire/"
	: "http://192.168.1.44:3000/flaire/"

export const postData = async ({
	url = "",
	data = {},
	headers = {},
	token = null,
} = {}) => {
	let res = await fetch(apiurl + url, {
		method: "POST",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
			...headers,
		},
		body: JSON.stringify(data),
	})
	const result = await res.json()
	return result
}

export const getData = async ({
	url = "",
	headers = {},
	token = null,
} = {}) => {
	let res = await fetch(apiurl + url, {
		method: "GET",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
			...headers,
		},
	})
	const result = await res.json()
	return result
}
