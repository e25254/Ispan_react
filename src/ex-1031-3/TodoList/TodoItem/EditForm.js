import { useState } from 'react';

function EditForm({ id, updateTodo, text }) {
	// 使用衍生的props作為state初始值
	const [inputEditingValue, setInputEditingValue] = useState(text);

	return (
		<>
			<input
				type="text"
				value={inputEditingValue}
				onChange={(e) => {
					setInputEditingValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					updateTodo(id, {
						text: inputEditingValue,
						editing: false,
					});
				}}
			>
				儲存
			</button>
		</>
	);
}

export default EditForm;
