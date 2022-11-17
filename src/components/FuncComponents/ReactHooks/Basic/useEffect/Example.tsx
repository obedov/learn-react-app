import * as React from 'react';
import { useEffect, useState } from 'react';

/**
 * https://reactjs.org/docs/hooks-reference.html#useeffect
 * https://www.w3schools.com/react/react_useeffect.asp
 */

/*
 * useEffect input params:
 * effect – Imperative function that can return a cleanup function.
 * deps – If present, effect will only activate if the values in the list change.
 *
 * By default, effects run after every completed render,
 * but you can choose to fire them only when certain values have changed.
 *
 */

export const Example1 = (): JSX.Element => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => setCount(count => count + 1), 1000);
		// Here useEffect fires always after each render, because there are no deps (by default).
	});

	return <h1>Case 1: I've rendered {count} times! (deps aren't passed)</h1>;
};

export const Example2 = (): JSX.Element => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => setCount(count => count + 1), 1000);
		// Here useEffect fires always, because "count" is passed to deps and its value changes.
		// When value changes, component re-renders and useEffect activates (by given changed value in deps).
		// And it goes again and again (to infinitive loop).
	}, [count]);

	return <h1>Case 2: I've rendered {count} times! (deps with count)</h1>;
};

export const Example3 = (): JSX.Element => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => setCount(count => count + 1), 1000);
		// Here useEffect fires only once, because it depends on empty deps list.
	}, []);

	return <h1>Case 3: I've rendered {count} times! (deps are empty)</h1>;
};

export const Example = (): JSX.Element => {
	return (
		<>
			<Example1 />
			<Example2 />
			<Example3 />
		</>
	);
};
