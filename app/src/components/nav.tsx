import React from "react"
import {
	Box,
	Heading,
	Flex,
	Text,
	Button,
	Link as Clink,
} from "@chakra-ui/core"
import Link from "next/link"
import { useUser, Logout } from "../utils/helper"
import { useRouter } from "next/router"

const links = [
	{ href: "/", name: "home" },
	{ href: "/profile", name: "profile" },
]

const Nav = ({ href, name, isActive }) => (
	<Text mt={{ base: 4, md: 0 }} mr={6} display="block">
		<Link href={href}>
			<Clink>
				{isActive && <b>{name}</b>}
				{!isActive && <>{name}</>}
			</Clink>
		</Link>
	</Text>
)

const RightButton = () => {
	const user = useUser()
	const router = useRouter()
	const onClick = () => {
		if (user) return Logout
		return () => {
			router.push("/login")
		}
	}
	return (
		<Button bg="transparent" border="1px" onClick={onClick()}>
			{user ? "logout" : "login"}
		</Button>
	)
}

const Header = ({ active }) => {
	const [show, setShow] = React.useState(false)
	const toggleShow = () => setShow(!show)

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			padding="1.5rem"
			bg="teal.500"
			color="white"
		>
			<Flex align="center" mr={5}>
				<Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
					Flaire
				</Heading>
			</Flex>

			<Box display={{ base: "block", md: "none" }} onClick={toggleShow}>
				<svg
					fill="white"
					width="12px"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</Box>

			<Box
				display={{ base: show ? "block" : "none", md: "flex" }}
				width={{ base: "full", md: "auto" }}
				alignItems="center"
				flexGrow={1}
			>
				{links.map((val) => {
					return (
						<Nav
							key={val.name}
							href={val.href}
							name={val.name}
							isActive={val.name === active}
						/>
					)
				})}
			</Box>
			<Box
				display={{ base: show ? "block" : "none", md: "block" }}
				mt={{ base: 4, md: 0 }}
			>
				<RightButton />
			</Box>
		</Flex>
	)
}

export default Header
