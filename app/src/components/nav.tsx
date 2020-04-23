import React, { useState, useEffect } from "react"
import { Box, Heading, Flex, Text, Link, Button } from "@chakra-ui/core"
import { getUser, useLocalStorage } from "../helper"
import { createPublicKey } from "crypto"

const MenuItems = ({ children }) => (
	<Text mt={{ base: 4, md: 0 }} mr={6} display="block">
		{children}
	</Text>
)

const Nav = ({ href, name }) => (
	<MenuItems>
		<Link href={href}>{name}</Link>
	</MenuItems>
)

const ActiveNav = ({ href, name }) => (
	<MenuItems>
		<Link href={href}>
			<b> {name} </b>
		</Link>
	</MenuItems>
)

const links = [
	{ href: "/", name: "home" },
	{ href: "/login", name: "login" },
	{ href: "/profile", name: "profile" },
]

const RightButton = () => (
	<Button bg="transparent" border="1px">
		Do something
	</Button>
)

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
					if (val.name == active)
						return (
							<ActiveNav
								key={val.name}
								href={val.href}
								name={val.name}
							/>
						)
					return (
						<Nav key={val.name} href={val.href} name={val.name} />
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
