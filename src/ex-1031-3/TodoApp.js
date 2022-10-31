import { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);
	const [isComposition, setIsComposition] = useState('');
	const [inputEditingValue, setInputEditingValue] = useState('');

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

	// 用在某個id項目 true/false互換
	const toggleTodoCompleted = (id) => {
		const newTodos = todos.map((v, i) => {
			if (v.id === id) return { ...v, completed: !v.completed };

			return { ...v };
		});

		setTodos(newTodos);
	};

	// 用在某個id項目 true/false互換
	const toggleTodoEditing = (id) => {
		const newTodos = todos.map((v, i) => {
			if (v.id === id) return { ...v, editing: !v.editing };
			//這裡要關掉其它編輯中的，同時間只有一個被編輯
			return { ...v, editing: false };
		});

		setTodos(newTodos);
	};

	// 用在某個id項目改變為某值用，合併物件值
	const updateTodo = (id, objectValue) => {
		// step1:  拷貝出新的物件陣列
		// step2: 在新的物件陣列上修改
		const newTodos = todos.map((v, i) => {
			if (v.id === id) return { ...v, ...objectValue };

			return { ...v };
		});

		setTodos(newTodos);
	};

	const deleteTodo = (id) => {
		// step1:  拷貝出新的物件陣列
		// step2: 在新的物件陣列上修改
		const newTodos = todos.filter((v, i) => {
			return v.id !== id;
		});

		// step3: 設定回state
		setTodos(newTodos);
	};

	return (
		<>
			<div className="todoList">
				<h1>Todo待辦事項</h1>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					// 偵測是否還在組字
					onCompositionStart={() => {
						setIsComposition(true);
					}}
					onCompositionEnd={() => {
						setIsComposition(false);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter' && isComposition === false) {
							//清空
							addTodo(e.target.value);
							setInputValue('');
						}
					}}
				/>
				<ul>
					{todos.map((v, i) => {
						// key值會因索引值變後會變化，不能用索引值當key
						return (
							<li key={v.id} className={v.completed ? 'completed' : 'not-completed'}>
								<input
									type="checkbox"
									checked={v.completed}
									onChange={() => {
										toggleTodoCompleted(v.id, 'completed');
									}}
								/>
								{v.editing ? (
									<input
										type="text"
										value={inputEditingValue}
										onChange={(e) => {
											setInputEditingValue(e.target.value);
										}}
									/>
								) : (
									v.text
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
										onClick={() => {
											toggleTodoEditing(v.id, 'editing');
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
			</div>
		</>
	);
}

export default TodoApp;
