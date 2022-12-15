import * as React from 'react';
import { useState, useCallback, memo } from 'react';

/**
 *
 * https://reactjs.org/docs/hooks-reference.html#usecallback
 * useCallback will return a memoized version of the callback that only changes if one of the inputs has changed
 *
 */

const useCustomState = (...args) => {
	// @ts-ignore
	return useState(...args);
};

export const Example1 = (): JSX.Element => {
	const [counter, setCounter] = useState(0);

	const onButtonClick = useCallback(() => {
		setCounter(prev => prev + 1);
	}, []);

	return (
		<>
			<ButtonWithMemo name={'with memo'} onClick={onButtonClick} />
			<ButtonWithoutMemo name={'without memo'} onClick={onButtonClick} />
			<p>{counter}</p>
		</>
	);
};

const Button = ({ name, onClick }) => {
	console.log(`child render ${name}`);
	return <button onClick={onClick}>{name}</button>;
};

const ButtonWithMemo = memo(Button);

const ButtonWithoutMemo = ({ name, onClick }) => {
	console.log(`child render ${name}`);
	return <button onClick={onClick}>{name}</button>;
};
