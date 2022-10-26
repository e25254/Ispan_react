import { useState } from 'react';
import './Counter.css';

function Counter() {
	const [total, setTotal] = useState(0);
	return (
		<>
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#/" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<h1>{total}</h1>
			<button
				onClick={() => {
					setTotal(total + 1);
				}}
			>
				+
			</button>
			<input type={'datetime-local'}></input>
			<button
				onClick={() => {
					setTotal(total - 1);
				}}
			>
				-
			</button>
		</>
	);
}

export default Counter;
