import React, { Component } from "react"
import axios from "axios";

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
			<li
				key={item.id}
				className="list-group-item d-flex justify-content-between align-items-center"
			>
				<span
					className={`todo-title mr-2`}
					title={item.brand}
				>
					{item.name}
					<br />
					{item.brand}
					<br />
					{item.price}
				</span>
			</li>
		));
	};

	render() {
		return (
			<main className="content">
				<div className="row">
					<div className="col-md-6 col-sm-10 mx-auto p-0">
						<div className="card p-3">
							<ul className="list-group list-group-flush">
								{this.renderItems()}
							</ul>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default App;