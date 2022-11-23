import * as React from 'react';
import { useEffect, useState, memo } from 'react';

import { PrimitiveFuncComponent1 } from './PrimitiveFuncComponent1';
import PrimitiveFuncComponent2 from './PrimitiveFuncComponent2';

export interface Primitives {
	string?: string;
	number?: number;
	boolean?: boolean;
}

export const TestPrimitiveFuncComponentsApp: React.FC = () => {
	const [state, setState] = useState({
		string: 'string',
		number: 0,
		boolean: false,
	} as Primitives);

	useEffect(() => {
		const string = 'new string';
		const number = 1;
		const boolean = true;

		setTimeout(() => setState({ string, number, boolean }), 1000);
		setTimeout(() => setState({ string, number, boolean }), 3000);
		setTimeout(() => setState({ string, number, boolean }), 5000);
	}, []);

	const { string, number, boolean } = state;

	return (
		<div className='testPrimitiveFuncComponentsApp'>
			<PrimitiveFuncComponent2 string={string} number={number} boolean={boolean} />
			<PrimitiveFuncComponent1 string={string} number={number} boolean={boolean} />
		</div>
	);
};
