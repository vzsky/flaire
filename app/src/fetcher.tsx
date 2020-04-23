// const apiurl = "http://localhost:3000/"
const apiurl = "http://192.168.1.44:3000/"

export const postData = async (url = "", data = {}, headers = {}) => {
	let res = await fetch(apiurl + url, {
		method: "POST",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		body: JSON.stringify(data),
	})
	return await res.json()
}

export const getData = async (url = "", headers = {}) => {
	let res = await fetch(apiurl + url, {
		method: "GET",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
	})
	return await res.json()
}
