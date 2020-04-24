import React from "react"
import { Box, Flex, Text } from "@chakra-ui/core"
import Nav from "./Nav"

export default ({ children, at }) => (
	<Box
		width="100%"
		height="100%"
		bg="blue.100"
		overflow="hidden"
		alignItems="center"
	>
		<Nav active={at} />
		<Flex width="100%" justify="center">
			<Box>{children}</Box>
		</Flex>
	</Box>
)
