import { useState } from 'react';
import './Counter.css';

let counter123 = 0;

function Counter() {
	const [total, setTotal] = useState(0);
	return (
		<>
			<h1>{total}</h1>
			<button
				className="btn"
				onClick={() => {
					console.log('before total=', total);
					const newTotal = total + 1;
					setTotal(newTotal); //	給 react render
					console.log('after total=', newTotal); //	資料先改變但還沒 render
				}}
			>
				+
			</button>
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
