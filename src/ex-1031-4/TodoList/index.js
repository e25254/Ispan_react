import TodoItem from './TodoItem';

function TodoList({
	todos,
	toggleTodoCompleted,
	toggleTodoEditing,
	updateTodo,
	deleteTodo,
	todosDisplay,
	searchKeyword,
}) {
	return (
		<>
			<ul>
				{todos
					.filter((v, i) => {
						if (todosDisplay === 'active')
							return (
								!v.completed && v.text.includes(searchKeyword)
							);
						if (todosDisplay === 'completed')
							return (
								v.completed && v.text.includes(searchKeyword)
							);
						return v.text.includes(searchKeyword);
					})
					.map((v, i) => {
						// 重要！ key值會因索引值變後也會改變，這裡不能用索引值當key
						return (
							<TodoItem
								key={v.id}
								todo={v}
								toggleTodoCompleted={toggleTodoCompleted}
								toggleTodoEditing={toggleTodoEditing}
								updateTodo={updateTodo}
								deleteTodo={deleteTodo}
							/>
						);
					})}
			</ul>
		</>
	);
}

export default TodoList;
