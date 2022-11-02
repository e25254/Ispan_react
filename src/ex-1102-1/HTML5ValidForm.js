import { useState } from 'react';
import { GiSurroundedEye } from 'react-icons/gi';
import { FaEyeSlash } from 'react-icons/fa';

function HTML5ValidForm() {
	// const [username, setUsername] = useState('');
	// const [password, setPassword] = useState('');

	const [user, setUser] = useState({
		username: '',
		password: '',
		email: '',
	});

	const [fieldErrors, setFieldErrors] = useState({
		username: '',
		password: '',
		email: '',
	});

	// true = 呈現密碼	false = 隱藏密碼
	const [show, setShow] = useState(false);

	const handleFieldChange = (e) => {
		console.log(e.target.type, e.target.name, e.target.value);
		const newUser = { ...user, [e.target.name]: e.target.value };
		setUser(newUser);
	};
	const handleFormSubmit = (e) => {
		// 阻擋預設form送出的行為
		e.preventDefault();

		// 得到輸入值的方式
		// 第1種，從state直接得到
		console.log(user);

		// 第2種，用FormData物件
		const formData = new FormData(e.target);
		console.log(
			formData.get('username'),
			formData.get('email'),
			formData.get('password')
		);

		// 其它驗証…修改

		// 送到伺服器
	};
	// 當表單有不合法的驗證出現時會觸發
	const handleFormInvalid = (e) => {
		// 阻擋預設行為 - 關閉泡泡訊息
		e.preventDefault();
		console.log(e.target.name, e.target.validationMessage);

		setFieldErrors({
			...fieldErrors,
			[e.target.name]: e.target.validationMessage,
		});
	};

	const handleFormChange = (e) => {
		//要把目前正在修改的欄位的錯誤訊息先清空
		setFieldErrors({
			...fieldErrors,
			[e.target.name]: '',
		});
	};

	return (
		<>
			<form
				onSubmit={handleFormSubmit}
				onInvalid={handleFormInvalid}
				onChange={handleFormChange}
			>
				<label>帳號：</label>
				<input
					type="text"
					name="username"
					value={user.username}
					onChange={handleFieldChange}
					required
				/>
				<span style={{ paddingLeft: '15px', color: 'red' }}>
					{fieldErrors.username}
				</span>
				<br />
				<label>信箱：</label>
				<input
					type="email"
					name="email"
					value={user.email}
					onChange={handleFieldChange}
					required
				/>
				<span style={{ paddingLeft: '15px', color: 'red' }}>
					{fieldErrors.email}
				</span>
				<br />
				<div className="MultipleInput_passwordBox">
					<label>密碼：</label>
					<input
						className="MultipleInput_password"
						type={show ? 'text' : 'password'}
						name="password"
						value={user.password}
						onChange={handleFieldChange}
						required
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
					<span style={{ paddingLeft: '15px', color: 'red' }}>
						{fieldErrors.password}
					</span>
				</div>
				<br />
				{/* <input
					type="checkbox"
					checked={show}
					onChange={() => {
						setShow(!show);
					}}
				/> */}
				{/* <label>顯示密碼</label> */}
				<button type="submit">送出</button>
				{/* 沒加 type 相當於 type="submit" */}
				<button
					type="button"
					onClick={() => {
						setUser({
							username: 'eddy123',
							email: 'test@gmail.com',
							password: '123456',
						});
					}}
				>
					填入範例資料
				</button>
			</form>
		</>
	);
}

export default HTML5ValidForm;
