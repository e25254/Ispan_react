import { useState } from 'react';
import './BirthSelect.css';

function BirthSelect() {
	const [year, setYear] = useState('');
	const [month, setMonth] = useState('');
	const [day, setDay] = useState('');

	const [text, setText] = useState('');

	// 製作下拉選單的項目使用的函式
	// params: min: number, max: number
	// return: number[]
	const makeOptions = (min, max) => {
		const options = [];

		for (let i = min; i < max + 1; i++) {
			options.push(i);
		}

		return options;
	};

	return (
		<>
			<span>
				西元
				<select
					value={year}
					onChange={(e) => {
						setYear(e.target.value);
					}}
				>
					<option value="">請選擇</option>
					{makeOptions(1920, 2010).map((v, i) => {
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
						setMonth(e.target.value);
					}}
				>
					<option value="">請選擇</option>
					{makeOptions(1, 12).map((v, i) => {
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
						setDay(e.target.value);
					}}
				>
					<option value="">請選擇</option>
					{/* 當 年+月 沒選好時，不會能選日 */}
					{year !== '' &&
						month !== '' &&
						makeOptions(1, new Date(year, month, 0).getDate()).map((v, i) => {
							return (
								<option key={i} value={v}>
									{v}
								</option>
							);
						})}
				</select>
				日
			</span>
			<br />
			<button
				onClick={() => {
					if (year === '' || month === '' || day === '') {
						alert('請先完成年月日選擇');
						return; //中止程式繼續執行，常用！
					}

					//18年的微秒值
					const ms18years = 568036800000;

					//使用者生日的微秒值
					const msBirth = Number(new Date(`${year}/${month}/${day}`));

					//目前時間的微秒值
					const msNow = Number(new Date());

					if (msNow - msBirth > ms18years) {
						setText('滿18歲');
					} else {
						setText('未滿18歲');
					}
				}}
			>
				檢查是否滿18歲
			</button>
			<hr />
			<p className={text === '滿18歲' ? 'over18' : 'not-over18'}>{text}</p>
		</>
	);
}

export default BirthSelect;
