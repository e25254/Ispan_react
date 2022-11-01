import { Slider, Switch } from 'antd';
import React, { useState } from 'react';
import './Slider.css';
const App_Slider = () => {
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(100);
	return (
		<>
			<input
				type="text"
				value={left}
				onChange={(e) => {
					setLeft(Number(e.target.value));
				}}
			/>
			<input
				type="text"
				value={right}
				onChange={(e) => {
					setRight(Number(e.target.value));
				}}
			/>
			<Slider
				range
				defaultValue={[0, 100]}
				onChange={(e) => {
					setLeft(e[0]);
					setRight(e[1]);
				}}
				value={[left, right]}
			/>
		</>
	);
};
export default App_Slider;
