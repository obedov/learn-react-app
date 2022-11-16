import * as React from 'react';

import { Primitives } from './TestPrimitiveFuncComponentsApp';

let count = 0;

export const ImpureFuncComponent: React.FC<Primitives> = ({ string, number, boolean }) => {
	count++;
	console.count('render ImpureFuncComponent');

	return (
		<div>
			<h2>ImpureFuncComponent (Primitive):</h2>
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
