import { postData } from "../fetcher"
import {
	Flex,
	Text,
	Box,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Button,
} from "@chakra-ui/core"
import Nav from "../components/nav"
import { useState } from "react"
import { useLocalStorage } from "../helper"

export default () => {
	const [form, setForm] = useState({ username: "", password: "" })
	const [error, setError] = useState({ username: "", password: "" })
	const [token, setToken] = useLocalStorage("token", null)

	const onInputChange = (e: any, name: string) => {
		setForm({ ...form, [name]: e.target.value })
	}

	const onSubmit = async (e: any) => {
		e.preventDefault()
		try {
			let res = await postData({
				url: "user/login",
				data: {
					username: form.username,
					password: form.password,
				},
			})
			if (res.status === "Failed") {
				console.log(res)
				if (res.msg === "No Such User")
					setError({ username: "No such user", password: "" })
				if (res.msg === "Wrong Password")
					setError({ username: "", password: "Wrong Password" })
				return
			}
			if (res.status === "Success") {
				setError({ username: "", password: "" })
				setForm({ username: "", password: "" })
				console.log(res)
				setToken(res.msg)
				window.location.replace("/")
				return
			}
		} catch (e) {
			console.log("error on submit", e)
			return
		}
		return
	}

	return (
		<Box
			width="100%"
			height="100%"
			bg="blue.100"
			overflow="hidden"
			alignItems="center"
		>
			<Nav active="login" />
			<Flex width="100%" justify="center">
				<Box>
					<Text width="auto" fontSize="3xl">
						login page
					</Text>
					<form onSubmit={onSubmit}>
						<FormControl isInvalid={error.username ? true : false}>
							<FormLabel htmlFor="username">Username</FormLabel>
							<Input
								name="username"
								placeholder="username"
								value={form.username}
								onChange={(e: any) => {
									onInputChange(e, "username")
								}}
							/>
							<FormErrorMessage>
								{error.username}
							</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={error.password ? true : false}>
							<FormLabel htmlFor="password">password</FormLabel>
							<Input
								type="password"
								name="password"
								placeholder="password"
								value={form.password}
								onChange={(e: any) => {
									onInputChange(e, "password")
								}}
							/>
							<FormErrorMessage>
								{error.password}
							</FormErrorMessage>
						</FormControl>
						<Button mt={4} variantColor="teal" type="submit">
							Submit
						</Button>
					</form>
				</Box>
			</Flex>
		</Box>
	)
}
