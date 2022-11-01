import { useState } from 'react';
import './TodoApp.css';

import AddForm from './AddForm';

function TodoApp_Homework() {
	const [inputValue, setInputValue] = useState('');
	// 處理要避開輸入法拼字用Enter的指標
	const [isComposition, setIsComposition] = useState(false);
	// 編輯用
	const [inputEditingValue, setInputEditingValue] = useState('');

	const [todos, setTodos] = useState([
		{
			id: 1,
			text: '買牛奶',
			completed: true,
			editing: false,
		},
		{ id: 2, text: '學react', completed: false, editing: false },
	]);

	const addTodo = (text) => {
		// id
		// 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
		// 2. id是均是數字，可求出最大值後遞增
		// 3. 隨機產生函式庫 例如 uuid/nanoid 等函式庫
		const newTodo = {
			id: Number(new Date()),
			text: text,
			completed: false,
			editing: false,
		};
		// 加入輸入的文字到todos陣列中
		// 三步驟的方式(拷貝 -> 加入到新陣列中 -> 設定回state)
		const newTodos = [newTodo, ...todos];

		setTodos(newTodos);
	};

	// 用在某個id項目，切換completed屬性true/false
	const toggleTodoCompleted = (id) => {
		const newTodos = todos.map((v, i) => {
			if (v.id === id) return { ...v, completed: !v.completed };

			return { ...v };
		});

		setTodos(newTodos);
	};

	// 用在某個id項目，切換editing屬性true/false
	const toggleTodoEditing = (id) => {
		const newTodos = todos.map((v, i) => {
			if (v.id === id) return { ...v, editing: !v.editing };
			//這裡要設定其它項目 editing:false，同時間只有一個被編輯
			return { ...v, editing: false };
		});

		setTodos(newTodos);
	};

	// 用在某個id項目改變為某值用，儲存新的值用
	const updateTodo = (id, objectValue) => {
		const newTodos = todos.map((v, i) => {
			if (v.id === id) return { ...v, ...objectValue };

			return { ...v };
		});

		setTodos(newTodos);
	};

	const deleteTodo = (id) => {
		const newTodos = todos.filter((v, i) => {
			return v.id !== id;
		});

		setTodos(newTodos);
	};

	return (
		<>
			<h1>Todo待辨事項</h1>
			<AddForm addTodo={addTodo} />
			<ul>
				{todos.map((v, i) => {
					// 重要！ key值會因索引值變後也會改變，這裡不能用索引值當key
					return (
						<li key={v.id} className={v.completed ? 'completed' : 'not-completed'}>
							<input
								type="checkbox"
								checked={v.completed}
								onChange={() => {
									toggleTodoCompleted(v.id);
								}}
							/>
							{v.editing ? (
								<input
									type="text"
									value={inputEditingValue}
									onChange={(e) => {
										setInputEditingValue(e.target.value);
									}}
									onKeyDown={(e) => {
										// 中文輸入期間不會加入到列表中
										if (e.key === 'Enter' && isComposition === false) {
											updateTodo(v.id, {
												text: inputEditingValue,
												editing: false,
											});
										}
									}}
								/>
							) : (
								<span
									onDoubleClick={() => {
										toggleTodoEditing(v.id);
										setInputEditingValue(v.text);
									}}
								>
									{v.text}
								</span>
							)}
							{v.editing ? (
								<button
									onClick={() => {
										updateTodo(v.id, {
											text: inputEditingValue,
											editing: false,
										});
									}}
								>
									儲存
								</button>
							) : (
								<button
									hidden
									onClick={() => {
										toggleTodoEditing(v.id);
										setInputEditingValue(v.text);
									}}
								>
									編輯
								</button>
							)}
							<button
								onClick={() => {
									deleteTodo(v.id);
								}}
							>
								X
							</button>
						</li>
					);
				})}
			</ul>
			<button>All</button>
			<button>Active</button>
			<button>Completed</button>
		</>
	);
}

export default TodoApp_Homework;
