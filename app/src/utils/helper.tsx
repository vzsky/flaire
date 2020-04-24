import { useState } from "react"
import { getData } from "./fetcher"
export type Prop = { [x: string]: any }

export const getUser = async (token: string, set: any, setToken: any) => {
	try {
		let res = await getData({ url: "user", token })
		if (res.status === "Success") set(res.msg)
	} catch (e) {
		console.log("Get User failed", e)
		setToken(null)
	}
}

export const Logout = () => {
	window.localStorage.setItem("token", "")
	window.location.replace("login")
}

export const useLocalStorage = (key: string, initialValue: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.log(error)
			return initialValue
		}
	})
	const setValue = (value) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.log(error)
		}
	}
	return [storedValue, setValue]
}
