import { Flex, Text, Box } from "@chakra-ui/core"
import Nav from "../components/nav"

export default () => {
	return (
		<Box
			width="100%"
			height="100%"
			bg="blue.100"
			overflow="hidden"
			alignItems="center"
		>
			<Nav active="profile" />
			<Flex width="100%" justify="center">
				<Box>
					<Text fontSize="3xl">welcome to profile page</Text>
				</Box>
			</Flex>
		</Box>
	)
}
