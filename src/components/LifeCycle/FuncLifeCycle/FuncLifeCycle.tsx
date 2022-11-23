import * as React from 'react';
import { useEffect, useLayoutEffect, useState } from 'react';

/*
 *
 * React func life-cycle (in example below):
 * 1) render
 * 2) useLayoutEffect
 * 3) useEffect
 *
 */

export function FuncLifeCycle() {
	const [count, setCount] = useState(0);

	useEffect(() => console.count('useEffect'), []);

	useLayoutEffect(() => console.count('useLayoutEffect'), []);

	const onButtonClick = (): void => setCount(prev => prev + 1);

	console.count('rendering JSX');

	return (
		<>
			<button onClick={onButtonClick}>button {count}</button>
		</>
	);
}
