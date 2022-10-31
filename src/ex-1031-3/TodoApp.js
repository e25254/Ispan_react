import { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);
	const [isComposition, setIsComposition] = useState('');
	return (
		<>
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
						const newTodo = { id: Number(new Date()), text: e.target.value, completed: false };
						const newTodos = [newTodo, ...todos];
						setTodos(newTodos);

						//清空
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
									// step1:  拷貝出新的物件陣列
									const newTodos = todos.map((v2, i2) => {
										return { ...v2 };
									});

									// step2: 在新的物件陣列上修改
									newTodos[i].completed = !newTodos[i].completed;

									// step3: 設定回state
									setTodos(newTodos);

									//   setTodos(
									//     todos.map((v2, i2) =>
									//       v2.id === v.id
									//         ? { ...v2, completed: !v2.completed }
									//         : { ...v2 }
									//     )
									//   )
								}}
							/>
							{v.text}
							<button
								onClick={() => {
									// step1:  拷貝出新的物件陣列
									// step2: 在新的物件陣列上修改
									const newTodos = todos.filter((v2, i2) => {
										return v.id !== v2.id;
									});

									// step3: 設定回state
									setTodos(newTodos);
								}}
							>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default TodoApp;
