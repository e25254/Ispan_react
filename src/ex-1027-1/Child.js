import { useState } from 'react';

// increment = 1 是預設傳入參數值為1的意思
function Child({ increment = 1 }) {
	const [total, setTotal] = useState(0);

	return (
		<>
			<h1
				onClick={() => {
					setTotal(total + increment);
				}}
			>
				{total}
			</h1>
		</>
	);
}

export default Child;
