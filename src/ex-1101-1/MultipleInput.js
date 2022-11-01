import { useState } from 'react';

function MultipleInput() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<>
			<label>帳號：</label>
			<input
				type="text"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<br />
			<label>密碼：</label>
			<input
				type="text"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
		</>
	);
}

export default MultipleInput;
