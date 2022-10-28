import { useState } from 'react';

function BmiComputer() {
	const [BMIHeight, setBMIHeight] = useState('');
	const [BMIWeight, setBMIWeight] = useState('');
	const [BMIBmi, setBMIBmi] = useState('');
	const [BMIText, setBMIText] = useState('');
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<h1>BmiComputer</h1>

				<h2>身高</h2>
				<input
					type="text"
					value={BMIHeight}
					onChange={(e) => {
						setBMIHeight(e.target.value);
					}}
				/>
				<br />

				<h2>體重</h2>
				<input
					type="text"
					value={BMIWeight}
					onChange={(e) => {
						setBMIWeight(e.target.value);
					}}
				/>
				<br />

				<button
					onClick={() => {
						let computer = Math.round((BMIWeight / ((BMIHeight / 100) * (BMIHeight / 100))) * 100) / 100;
						if (computer < 18.5) {
							setBMIBmi(`身高 ${BMIHeight} 公分 體重 ${BMIWeight} 公斤 BMI ${computer} 體重過輕`);
						}
					}}
				>
					計算
				</button>
				<h1>{BMIBmi}</h1>
			</form>
		</>
	);
}

export default BmiComputer;
