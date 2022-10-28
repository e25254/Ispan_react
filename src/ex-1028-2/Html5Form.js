import { useRef, useState } from 'react';

function InputDemo() {
	const [inputTextBox, setInputTextBox] = useState('');
	const [textAreaText, setTextAreaText] = useState('');
	const [agree, setAgree] = useState(false);

	//記錄使用者選了哪個值
	const [gender, setGender] = useState('');

	const genderOptions = ['男', '女', '不提供'];

	const [pet, setPet] = useState('');
	const petOptions = ['貓', '狗', '魚'];

	const [likeList, setLikeList] = useState([]);
	const fruitOptions = ['芒果', '蘋果', '香蕉'];

	return (
		<>
			<h1>文字輸入匡(input-text)</h1>
			<input
				type="text"
				value={inputTextBox}
				onChange={(e) => {
					setInputTextBox(e.target.value);
				}}
			/>

			<h1>文字輸入匡(textarea)</h1>
			<textarea
				value={textAreaText}
				onChange={(e) => {
					setTextAreaText(e.target.value);
				}}
			/>

			<h1>核取方塊(checkbox single)</h1>
			<input
				id="agree_checkbox"
				type="checkbox"
				checked={agree}
				onChange={(e) => {
					setAgree(e.target.checked);
				}}
			/>
			<label htmlFor="agree_checkbox">我同意會員註冊條款</label>

			<h1>選項按鈕群組(radio group)</h1>
			{genderOptions.map((v, i) => {
				return (
					<div key={i}>
						<input
							id={`gender_radio_${i}`}
							type="radio"
							checked={gender === v}
							value={v}
							onChange={(e) => {
								setGender(e.target.value);
							}}
						/>
						<label htmlFor={`gender_radio_${i}`}>{v}</label>
					</div>
				);
			})}

			<h1>下拉清單</h1>
			<select
				value={pet}
				onChange={(e) => {
					setPet(e.target.value);
				}}
			>
				<option>---請選擇---</option>
				{petOptions.map((v, i) => {
					return (
						<option key={i} value={v}>
							{v}
						</option>
					);
				})}
			</select>

			<h1>核取方塊群組(checkbox group)</h1>
			{fruitOptions.map((v, i) => {
				return (
					<div key={i}>
						<input
							id={`fruitOptions_checkbox_${i}`}
							type="checkbox"
							checked={likeList.includes(v)}
							value={v}
							onChange={(e) => {
								const value = e.target.value;

								if (likeList.includes(value)) {
									//	如果此項目值在 state陣列中 -> 移出 state陣列
									const newLikeList = likeList.filter((v2, i2) => {
										return v2 !== value;
									});
									setLikeList(newLikeList);
								} else {
									//	如果不在此 state陣列中 -> 加到 state陣列
									const newLikeList = [...likeList, value];
									setLikeList(newLikeList);
								}
							}}
						/>
						<label htmlFor={`fruitOptions_checkbox_${i}`}>{v}</label>
					</div>
				);
			})}
			{/* 
			<input
				type="radio"
				checked={gender === '男'}
				value="男"
				onChange={(e) => {
					setGender(e.target.value);
				}}
			/>
			<label>男</label>
			<input
				type="radio"
				checked={gender === '女'}
				value="女"
				onChange={(e) => {
					setGender(e.target.value);
				}}
			/>
			<label>女</label>
			<input
				type="radio"
				checked={gender === '不提供'}
				value="不提供"
				onChange={(e) => {
					setGender(e.target.value);
				}}
			/>
			<label>不提供</label> */}
		</>
	);
}

export default InputDemo;
