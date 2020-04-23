import useSWR from "swr"
import { getData } from "../fetcher"
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
			<Nav active="login" />
			<Flex width="100%" justify="center">
				<Box>
					<Text width="auto" fontSize="3xl">
						login page
					</Text>
					<Text>login form here</Text>
				</Box>
			</Flex>
		</Box>
	)
}
