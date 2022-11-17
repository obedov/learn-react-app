import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

let counter = -1;

export const Example1 = (): JSX.Element => {
	const [inputValue, setInputValue] = useState('');
	const count = useRef(0);

	useEffect(() => {
		count.current = count.current + 1;
	});

	counter++;

	return (
		<>
			<input type={'text'} value={inputValue} onChange={e => setInputValue(e.target.value)} />
			<h2>Ref render counter: {count.current}</h2>
			<h2>Variable render counter: {counter}</h2>
		</>
	);
};
