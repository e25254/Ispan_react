import { useState } from 'react';

import InputById from './InputById';
import InputByRefs from './InputByRefs';

function InputDemo() {
	const [inputTextBox, setInputTextBox] = useState('');

	return (
		<>
			<h1>可控表單元件</h1>
			<input
				type="text"
				value={inputTextBox}
				onChange={(e) => {
					setInputTextBox(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setInputTextBox('text@gmail.com');
				}}
			>
				載入資料
			</button>
			<h1>不可控表單元件(ID)</h1>
			<InputById />
			<InputById />
			<h1>不可控表單元件(REF)</h1>
			<InputByRefs />
			<InputByRefs />
		</>
	);
}

export default InputDemo;
