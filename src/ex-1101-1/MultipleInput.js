import { useState } from 'react';
import { GiSurroundedEye } from 'react-icons/gi';
import { FaEyeSlash } from 'react-icons/fa';
import './MultipleInput.css';

function MultipleInput() {
	// const [username, setUsername] = useState('');
	// const [password, setPassword] = useState('');

	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	// true = 呈現密碼	false = 隱藏密碼
	const [show, setShow] = useState(false);

	const handleFieldChange = (e) => {
		console.log(e.target.type, e.target.name, e.target.value);
		const newUser = { ...user, [e.target.name]: e.target.value };
		setUser(newUser);
	};

	return (
		<>
			<label>帳號：</label>
			<input type="text" name="username" value={user.username} onChange={handleFieldChange} />
			<br />
			<div className="MultipleInput_passwordBox">
				<label>密碼：</label>
				<input
					className="MultipleInput_password"
					type={show ? 'text' : 'password'}
					name="password"
					value={user.password}
					onChange={handleFieldChange}
				/>
				<label className="MultipleInput_eye">
					<GiSurroundedEye
						className={show ? '' : 'MultipleInput_hidden'}
						onClick={() => {
							setShow(false);
						}}
					/>
					<FaEyeSlash
						className={!show ? '' : 'MultipleInput_hidden'}
						onClick={() => {
							setShow(true);
						}}
					/>
				</label>
			</div>
			{/* <input
				type="checkbox"
				checked={show}
				onChange={() => {
					setShow(!show);
				}}
			/> */}
			{/* <label>顯示密碼</label> */}
		</>
	);
}

export default MultipleInput;
