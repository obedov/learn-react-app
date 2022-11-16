import * as React from 'react';
import { useEffect, useState } from 'react';

import PureFuncComponent from './PureFuncComponent';
import { ImpureFuncComponent } from './ImpureFuncComponent';

export interface ComplexTypes {
	object?: { string?: string; number?: number; boolean?: boolean };
	array?: number[];
	func?: (text?: string) => void;
}
export const TestComplexFuncComponentsApp: React.FC = () => {
	const [state, setState] = useState({
		object: { string: 'string', number: 0, boolean: false },
		array: [0],
		func: () => console.log('string'),
	} as ComplexTypes);

	const { object, array, func } = state;

	useEffect(() => {
		setTimeout(
			() =>
				setState({
					object: { ...object, string: 'new string' },
					array: [...array, 1, 2, 3],
				}),
			1000
		);
		setTimeout(
			() =>
				setState({
					object: { ...object, string: 'new string' },
					array: [...array, 1, 2, 3],
				}),
			3000
		);
		setTimeout(
			() =>
				setState({
					object: { ...object, string: 'new string' },
					array: [...array, 1, 2, 3],
				}),
			5000
		);
	}, []);

	return (
		<div className='testComplexFuncComponentsApp'>
			<PureFuncComponent object={object} array={array} func={func} />
			<ImpureFuncComponent object={object} array={array} func={func} />
		</div>
	);
};
