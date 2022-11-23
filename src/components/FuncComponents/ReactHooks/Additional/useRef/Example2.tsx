import * as React from 'react';
import { useRef } from 'react';

/**
 * https://reactjs.org/docs/hooks-reference.html#useref
 * https://www.w3schools.com/react/react_useref.asp
 */

/**
 * Example 2 (accessing DOM elements):
 * Use useRef to focus the input.
 */

// A common use case is to access a child imperatively:
export const Example2 = (): JSX.Element => {
	const inputElement = useRef(null);

	const focusInput = (): void => {
		inputElement.current.focus();
	};

	return (
		<>
			<input type={'text'} ref={inputElement} />
			<button onClick={focusInput}>Focus Input</button>
		</>
	);
};
