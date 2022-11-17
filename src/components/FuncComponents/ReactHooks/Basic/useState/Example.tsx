import * as React from 'react';
import { useState } from 'react';

export const Example = (): JSX.Element => {
	const [count, setCount] = useState(0);

	const onButtonClick = (): void => setCount(prev => prev + 1);

	return (
		<>
			<button onClick={onButtonClick}>button {count}</button>
		</>
	);
};
