import { useState } from 'react';

function ChildB(props) {
	const [childBData, setChildBData] = useState('child_B_Data');
	// props.setDataFromChildB(childBData);
	return (
		<>
			<h1>ChildB</h1>
			<button
				onClick={() => {
					props.setDataFromChildB(childBData);
				}}
			>
				送資料到parent
			</button>
		</>
	);
}

export default ChildB;
