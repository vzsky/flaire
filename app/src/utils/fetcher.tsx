// const apiurl = "http://localhost:3000/"
const apiurl = "http://192.168.1.44:3000/"

export const postData = async ({
	url = "",
	data = {},
	headers = {},
	token = null,
} = {}) => {
	try {
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
		if (!res.ok) throw new Error("Response Failed")
		const result = await res.json()
		if (result.status && result.status === "Error")
			throw new Error("Bad Request")
		return result
	} catch (e) {
		throw e
	}
}

export const getData = async ({ url = "", headers = {}, token = "" } = {}) => {
	try {
		let res = await fetch(apiurl + url, {
			method: "GET",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
				...headers,
			},
		})
		if (!res.ok) throw new Error(res.statusText)
		const result = await res.json()
		if (result.status && result.status === "Error")
			throw new Error("Bad Request")
		return result
	} catch (e) {
		throw e
	}
}
