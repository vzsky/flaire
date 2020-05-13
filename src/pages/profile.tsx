import { Text } from '@chakra-ui/core'
import Layout from '../components/layout'
import { useUser } from '../utils/helper'
import { useEffect } from 'react'

export default () => {
  const user = useUser({ redirectTo: '/login' })

  useEffect(() => {
    //call user info at 'info' with token
  })

  return (
    <Layout at="profile">
      <Text fontSize="3xl">welcome to {user?.username}'s profile page</Text>
    </Layout>
  )
}
