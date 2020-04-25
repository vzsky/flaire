import { Text } from "@chakra-ui/core"
import Layout from "../components/layout"
import { useUser } from "../utils/helper"

export default () => {
	const user = useUser({ redirectTo: "/login" })
	return (
		<Layout at="profile">
			<Text fontSize="3xl">
				welcome to {user?.username}'s profile page
			</Text>
		</Layout>
	)
}
