import * as React from 'react';
import { useFetch } from './useFetch';

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const Example = (): JSX.Element => {
	const [data] = useFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos');

	return (
		<>
			{data?.map(({ id, title }) => (
				<p key={id}>{title}</p>
			))}
		</>
	);
};
