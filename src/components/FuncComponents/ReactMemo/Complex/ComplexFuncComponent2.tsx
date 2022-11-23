import * as React from 'react';
import { memo } from 'react';
import { isEqual } from 'lodash';

import { ComplexTypes } from './TestComplexFuncComponentsApp';

let count = 0;

const ComplexFuncComponent2: React.FC<ComplexTypes> = ({ object, array, func }) => {
	count++;
	console.count('render ComplexFuncComponent2');

	return (
		<div>
			<h2>MemoizedFuncComponent (Complex):</h2>
			<div>object: {object?.string}</div>
			<div>array: {array}</div>
			<div>func: {func?.toString()}</div>
			<br />
			<div>
				<b>render pure count:</b> {count}
			</div>
		</div>
	);
};

const areEqual = (prevProps, nextProps) => isEqual(prevProps, nextProps);

export default memo(ComplexFuncComponent2, areEqual);
