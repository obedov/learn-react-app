import * as React from 'react';
import { useState, useCallback, memo } from 'react';

export const Example2 = (): JSX.Element => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = (): void => {
		setCount(c => c + 1);
	};
	const addTodo = useCallback(() => {
		setTodos(t => [...t, 'New Todo']);
	}, []);

	return (
		<>
			<TodosMemo todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
};

const Todos = ({ todos, addTodo }) => {
	console.log('child render');
	return (
		<>
			<h2>My Todos</h2>
			{todos.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
			<button onClick={addTodo}>Add Todo</button>
		</>
	);
};

const TodosMemo = memo(Todos);
