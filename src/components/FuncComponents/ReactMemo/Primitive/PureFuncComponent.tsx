import * as React from 'react';
import { memo } from 'react';

import { Primitives } from './TestPrimitiveFuncComponentsApp';

let count = 0;

const PureFuncComponent: React.FC<Primitives> = ({ string, number, boolean }) => {
	count++;
	console.count('render PureFuncComponent');

	return (
		<div>
			<h2>PureFuncComponent (Primitive):</h2>
			<div>string: {string}</div>
			<div>number: {number}</div>
			<div>boolean: {String(boolean)}</div>
			<br />
			<div>
				<b>render pure count:</b> {count}
			</div>
		</div>
	);
};

export default memo(PureFuncComponent);
