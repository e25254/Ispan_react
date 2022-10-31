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

	let myBirth = +new Date(`${year}/${month}/${day}`);
	// console.log(myBirth);
	let nowTime = +new Date();
	// console.log(nowTime);

	// 判斷每年每個月份有幾天： new Date(year, month, 0).getDate()
	if (month === 2) {
		if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
			daySelect.length = 29;
		} else {
			daySelect.length = 28;
		}
	} else if (month === 4) {
		daySelect.length = 30;
	} else if (month === 6) {
		daySelect.length = 30;
	} else if (month === 9) {
		daySelect.length = 30;
	} else if (month === 11) {
		daySelect.length = 30;
	}
	// console.log(daySelect);
	return (
		<>
			<span>
				西元
				<select
					value={year}
					onChange={(e) => {
						setYear(Number(e.target.value));
					}}
				>
					{/* 年 */}
					<option value={''}>請選擇</option>
					{yearSelect.map((v, i) => {
						return (
							<option key={i} value={v}>
								{v}
							</option>
						);
					})}
				</select>
				年
			</span>
			<span>
				<select
					value={month}
					onChange={(e) => {
						setMonth(Number(e.target.value));
					}}
				>
					{/* 月 */}
					<option value={''}>請選擇</option>
					{year !== '' &&
						monthSelect.map((v, i) => {
							return (
								<option key={i} value={v}>
									{v}
								</option>
							);
						})}
				</select>
				月
			</span>
			<span>
				<select
					value={day}
					onChange={(e) => {
						setDay(Number(e.target.value));
					}}
				>
					{/* 日 */}
					<option value={''}>請選擇</option>
					{year !== '' &&
						month !== '' &&
						daySelect.map((v, i) => {
							return (
								<option key={i} value={v}>
									{v}
								</option>
							);
						})}
				</select>
				日
			</span>
			<button
				onClick={() => {
					if (year === '' || month === '' || day === '') {
						alert('請先選擇出生年月日');
						return;
					}
					if (nowTime - myBirth >= 568036800000) {
						setYes18Class('setYes18Class_green');
						setYes18('滿十八歲');
					} else {
						setYes18Class('setYes18Class_red');
						setYes18('未滿十八歲');
					}
				}}
			>
				檢查是否滿18
			</button>
			<h1 className={yes18Class}>{yes18}</h1>
		</>
	);
}

export default Have18;
