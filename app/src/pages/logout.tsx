import Layout from "../components/layout"
import { useRouter } from "next/router"
import { Logout } from "../helper"

export default () => {
	const router = useRouter()
	Logout()
	router.back()
	return <Layout at="logout">{}</Layout>
}
