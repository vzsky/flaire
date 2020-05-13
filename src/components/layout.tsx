import { Flex, Box } from '@chakra-ui/core'
import Nav from '../components/nav'

export default ({ children, at }) => {
  return (
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
}
