import { useState } from 'react';
import './BmiComputer_css.css';

function BmiComputer() {
	const [BMIHeight, setBMIHeight] = useState('');
	const [BMIWeight, setBMIWeight] = useState('');
	const [BMIBmi, setBMIBmi] = useState('');
	const [BMIClass, setBMIClass] = useState('');
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
					type="number"
					value={BMIHeight}
					onChange={(e) => {
						setBMIHeight(e.target.value);
					}}
				/>
				<br />

				<h2>體重</h2>
				<input
					type="number"
					value={BMIWeight}
					onChange={(e) => {
						setBMIWeight(e.target.value);
					}}
				/>
				<br />
				<br />
				<button
					onClick={() => {
						let computer = Math.round((BMIWeight / ((BMIHeight / 100) * (BMIHeight / 100))) * 100) / 100;
						if (computer < 18.5) {
							setBMIBmi(`身高 ${BMIHeight} 公分 體重 ${BMIWeight} 公斤 BMI ${computer} 體重過輕`);
							setBMIClass('BMIClass_blue');
						} else if (computer < 24) {
							setBMIBmi(`身高 ${BMIHeight} 公分 體重 ${BMIWeight} 公斤 BMI ${computer} 健康體重`);
							setBMIClass('BMIClass_green');
						} else if (computer < 27) {
							setBMIBmi(`身高 ${BMIHeight} 公分 體重 ${BMIWeight} 公斤 BMI ${computer} 體重過重`);
							setBMIClass('BMIClass_yellow');
						} else if (computer >= 27) {
							setBMIBmi(`身高 ${BMIHeight} 公分 體重 ${BMIWeight} 公斤 BMI ${computer} 重度肥胖`);
							setBMIClass('BMIClass_purple');
						}
					}}
				>
					計算
				</button>
				<hr />

				<h2 className={BMIClass}>{BMIBmi}</h2>
			</form>
		</>
	);
}

export default BmiComputer;
