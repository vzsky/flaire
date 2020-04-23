import { Flex, Text, Box, Button } from "@chakra-ui/core"
import Nav from "../components/nav"
import { useState, useEffect } from "react"
import { useLocalStorage, getUser, Logout } from "../helper"

export default () => {
	const [token, setToken] = useLocalStorage("token", null)
	const [user, setUser] = useState({ username: null, role: null })

	useEffect(() => {
		getUser(token, setUser, setToken)
	}, [token])

	return (
		<Box
			width="100%"
			height="100%"
			bg="blue.100"
			overflow="hidden"
			alignItems="center"
		>
			<Nav active="home" />
			<Flex width="100%" justify="center">
				<Box>
					<Text fontSize="3xl">
						welcome to home page, {user.username}
					</Text>
					{user.username && <Button onClick={Logout}>logout</Button>}
				</Box>
			</Flex>
		</Box>
	)
}
