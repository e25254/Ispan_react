import { useState } from 'react';

function ChildB(props) {
	return (
		<>
			<h1>ChildB</h1>
			<p>來自Parent:{props.dataToAll}</p>
			<p>來自Parent:{props.b_Data}</p>
			<button
				onClick={() => {
					props.setB_Data('嗨我是Ｂ');
				}}
			>
				嗨我是Ｂ
			</button>
		</>
	);
}

export default ChildB;
