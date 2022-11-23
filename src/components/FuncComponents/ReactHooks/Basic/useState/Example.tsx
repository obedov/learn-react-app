import * as React from 'react';
import { useState } from 'react';

/*
 * https://reactjs.org/docs/hooks-reference.html#usestate
 * https://www.w3schools.com/react/react_usestate.asp
 *
 * Returns a stateful value, and a function to update it.
 */

export const Example = (): JSX.Element => {
	const [count, setCount] = useState(0);

	const onButtonClick = (): void => setCount(prev => prev + 1);

	console.count('render');

	return (
		<>
			<button onClick={onButtonClick}>button {count}</button>
		</>
	);
};
