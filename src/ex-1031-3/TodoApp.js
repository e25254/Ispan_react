import { useState } from 'react';

function TodoApp() {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState(['買牛奶', '學react']);
	return (
		<>
			<h1>Todo待辦事項</h1>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						const newTodos = [e.target.value, ...todos];
						setTodos(newTodos);

						//清空
						setInputValue('');
					}
				}}
			/>
			<ul>
				{todos.map((v, i) => {
					return <li key={i}>{v}</li>;
				})}
			</ul>
		</>
	);
}

export default TodoApp;
