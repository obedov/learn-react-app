import * as React from 'react';
import { useEffect, useState } from 'react';

export const Example = (): JSX.Element => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.count('useEffect');
		setTimeout(() => {
			setCount(count => count + 1);
		}, 1000);
	}, [count]);

	return <h1>I've rendered {count} times!</h1>;
};
