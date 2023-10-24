import React, { Component } from "react"

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import img from "./assets/img/slider1.jpg";
import { AllRoutes } from "./routes/AllRoutes.jsx";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<AllRoutes />
				<Footer />
			</div>
		)
	}
}

export default App;