import React, { Component } from "react"
import axios from "axios";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Card } from "./components/Card.jsx";
import { Carousel } from "./components/Carousel.jsx";
import img from "./assets/img/slider1.jpg";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: {
				name: "",
				brand: "",
				price: 0,
			},
			carList: []
		};
	}

	async componentDidMount() {
		try {
			const res = await fetch('http://127.0.0.1:8000/api/cars/');
			const carList = await res.json();
			this.setState({
				carList
			});
		} catch (e) {
			console.log(e);
		}
	}
	renderItems = () => {
		const newItems = this.state.carList;
		return newItems.map(item => (
			<Card key={item.id} carName={item.name} carBrand={item.brand} carPrice={item.price} />
		));
	};

	render() {
		return (
			<div className="App">
				<Header />
				<img class="h-auto max-w-full" src={img} alt="image description" />	
				<main>
					<section className="flex flex-col">
						<div>
								
						</div>
						<div className="flex flex-wrap justify-center">
								{this.renderItems()}
						</div>
					</section>
				</main>
				<Footer />
			</div>
		)
	}
}

export default App;