import React, { Component } from 'react';

class CC extends Component {
	constructor() {
		super();
		console.log('constructor');
		this.state = { total: 0 };
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	render() {
		console.log('render');
		return (
			<>
				<h1>類別型元件</h1>
				<h1
					onClick={() => {
						this.setState({ total: this.state.total + 1 });
					}}
				>
					{this.state.total}
				</h1>
			</>
		);
	}
}

export default CC;
