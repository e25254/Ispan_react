import { useState } from 'react';
import './Have18_css.css';

function Have18() {
	const yearSelect = [];
	for (let i = 1920; i <= 2022; i++) {
		yearSelect.push(i);
	}
	// console.log(yearSelect);
	const monthSelect = [];
	for (let i = 1; i <= 12; i++) {
		monthSelect.push(i);
	}
	// console.log(monthSelect);
	const daySelect = [];
	for (let i = 1; i <= 31; i++) {
		daySelect.push(i);
	}
	// console.log(daySelect);
	const [year, setYear] = useState('');
	const [month, setMonth] = useState('');
	const [day, setDay] = useState('');

	const [yes18, setYes18] = useState('');
	const [yes18Class, setYes18Class] = useState('');

	let yearChoose = Number(1920 + year);
	let monthChoose = Number(1 + month);
	let dayChoose = Number(1 + day);
	let myBirth = +new Date(`${yearChoose}/${monthChoose}/${dayChoose}`);
	// console.log(myBirth);
	let nowTime = +new Date();
	// console.log(nowTime);
	if (monthChoose === 2) {
		if ((yearChoose % 4 === 0 && yearChoose % 100 !== 0) || yearChoose % 400 === 0) {
			daySelect.length = 29;
		} else {
			daySelect.length = 28;
		}
	} else if (monthChoose === 4) {
		daySelect.length = 30;
	} else if (monthChoose === 6) {
		daySelect.length = 30;
	} else if (monthChoose === 9) {
		daySelect.length = 30;
	} else if (monthChoose === 11) {
		daySelect.length = 30;
	}
	// console.log(daySelect);
	return (
		<>
			<select
				value={year}
				onChange={(e) => {
					setYear(Number(e.target.value));
				}}
			>
				{/* 年 */}
				{yearSelect.map((v, i) => {
					return (
						<option key={i} value={i}>
							{v}
						</option>
					);
				})}
			</select>
			<select
				value={month}
				onChange={(e) => {
					setMonth(Number(e.target.value));
				}}
			>
				{/* 月 */}
				{monthSelect.map((v, i) => {
					return (
						<option key={i} value={i}>
							{v}
						</option>
					);
				})}
			</select>
			<select
				value={day}
				onChange={(e) => {
					setDay(Number(e.target.value));
				}}
			>
				{/* 日 */}
				{daySelect.map((v, i) => {
					return (
						<option key={i} value={i}>
							{v}
						</option>
					);
				})}
			</select>
			<button
				onClick={() => {
					if (nowTime - myBirth >= 568036800000) {
						setYes18Class('setYes18Class_green');
						setYes18('滿十八歲');
					} else {
						setYes18Class('setYes18Class_red');
						setYes18('未滿十八歲');
					}
					// setYes18('');
				}}
			>
				檢查是否滿18
			</button>
			<h1 className={yes18Class}>{yes18}</h1>
		</>
	);
}

export default Have18;
