import * as React from 'react';

import { Primitives } from './TestPrimitiveFuncComponentsApp';

let count = 0;

export const PrimitiveFuncComponent1: React.FC<Primitives> = ({ string, number, boolean }) => {
	count++;
	console.count('render PrimitiveFuncComponent1');

	return (
		<div>
			<h2>NotMemoizedFuncComponent (Primitive):</h2>
			<div>string: {string}</div>
			<div>number: {number}</div>
			<div>boolean: {String(boolean)}</div>
			<br />
			<div>
				<b>render impure count:</b> {count}
			</div>
		</div>
	);
};
