import * as React from 'react';
import { memo } from 'react';
import { isEqual } from 'lodash';

import { ComplexTypes } from './TestComplexFuncComponentsApp';

let count = 0;

const PureFuncComponent: React.FC<ComplexTypes> = ({ object, array, func }) => {
	count++;
	console.count('render PureFuncComponent');

	return (
		<div>
			<h2>PureFuncComponent (Complex):</h2>
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

function areEqual(prevProps, nextProps) {
	return isEqual(prevProps, nextProps);
}

export default memo(PureFuncComponent, areEqual);
