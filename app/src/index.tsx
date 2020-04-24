import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import { ThemeProvider } from "@chakra-ui/core"
import { theme } from "./utils/config"
import { BrowserRouter, Route } from "react-router-dom"
import "./index.css"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				<Route path="/login" exact component={Login} />
				<Route path="/profile" exact component={Profile} />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
