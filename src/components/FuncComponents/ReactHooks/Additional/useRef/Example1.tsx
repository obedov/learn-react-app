import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

/**
 * https://reactjs.org/docs/hooks-reference.html#useref
 * https://www.w3schools.com/react/react_useref.asp
 *
 *
 * The useRef Hook allows you to persist values between renders.
 * It can be used to store a mutable value that does not cause re-render when updated.
 * It can be used to access a DOM element directly.
 *
 */

/**
 * Example 1:
 * Use useRef to track application renders.
 */

let counter = -1;

export const Example1 = (): JSX.Element => {
	const [inputValue, setInputValue] = useState('');
	const count = useRef(0);

	useEffect(() => {
		count.current = count.current + 1;
	});

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value);

	counter++;

	return (
		<>
			<input type={'text'} value={inputValue} onChange={onInputChange} />
			<h2>Ref render counter: {count.current}</h2>
			<h2>Variable render counter: {counter}</h2>
		</>
	);
};
