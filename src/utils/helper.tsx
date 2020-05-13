import { useState, useEffect } from "react"
import { getData } from "./fetcher"
import Router from "next/router"
import useSWR from "swr"

export type Prop = { [x: string]: any }

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
	const setValue = (value: any) => {
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

export const useUser = ({ redirectTo = null, redirectIfFound = null } = {}) => {
	const [token] = useLocalStorage("token", null)
	const { data, error } = useSWR("user", (url: string) => {
		if (token !== undefined) return getData({ url, token })
	})
	const finished = Boolean(data)
	const hasUser = Boolean(data?.status === "Success")
	useEffect(() => {
		if (!redirectTo || !finished) return
		if (
			// If redirectTo is set, redirect if the user was not found.
			(redirectTo && !redirectIfFound && !hasUser) ||
			// If redirectIfFound is also set, redirect if the user was found
			(redirectIfFound && hasUser)
		) {
			Router.push(redirectTo)
		}
	}, [redirectTo, redirectIfFound, finished, hasUser])

	const user = data?.msg
	return error ? null : user
}

export const Logout = () => {
	window.localStorage.setItem("token", null)
}
