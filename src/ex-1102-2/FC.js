import { useState, useEffect } from 'react';

function FC() {
	const [total, setTotal] = useState(0);

	// 模擬 componentDidMount
	useEffect(() => {
		console.log('模擬 componentDidMount');
	}, []);

	return (
		<>
			<h1>函式型元件</h1>
			<h1
				onClick={() => {
					setTotal(total + 1);
				}}
			>
				{total}
			</h1>
		</>
	);
}

export default FC;
