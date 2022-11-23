import * as React from 'react';

import { ComplexTypes } from './TestComplexFuncComponentsApp';

let count = 0;

export const ComplexFuncComponent1: React.FC<ComplexTypes> = ({ object, array, func }) => {
	count++;
	console.count('render ComplexFuncComponent1');

	return (
		<div>
			<h2>NotMemoizedFuncComponent (Complex):</h2>
			<div>object: {object?.string}</div>
			<div>array: {array}</div>
			<div>func: {func?.toString()}</div>
			<br />
			<div>
				<b>render impure count:</b> {count}
			</div>
		</div>
	);
};
