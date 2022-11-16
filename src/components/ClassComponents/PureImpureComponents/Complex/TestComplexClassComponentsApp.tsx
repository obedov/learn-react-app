import * as React from 'react';

import { PureClassComponent } from './PureClassComponent';
import { ImpureClassComponent } from './ImpureClassComponent';

export interface ComplexTypes {
	object?: { string?: string; number?: number; boolean?: boolean };
	array?: number[];
	func?: (text?: string) => void;
}

export class TestComplexClassComponentsApp extends React.Component<{}, ComplexTypes> {
	constructor(props) {
		super(props);
		this.state = {
			object: { string: 'string', number: 0, boolean: false },
			array: [0],
			func: () => console.log('string'),
		};
	}

	componentDidMount(): void {
		const { object, array } = this.state;
		setTimeout(
			() =>
				this.setState({
					object: { ...object, string: 'new string' },
					array: [...array, 1, 2, 3],
				}),
			1000
		);
		setTimeout(
			() =>
				this.setState({
					object: { ...object, string: 'new string' },
					array: [...array, 1, 2, 3],
				}),
			3000
		);
		setTimeout(
			() =>
				this.setState({
					object: { ...object, string: 'new string' },
					array: [...array, 1, 2, 3],
				}),
			5000
		);
	}

	render(): JSX.Element {
		const { object, array, func } = this.state;

		return (
			<div className='testComplexClassComponentsApp'>
				<PureClassComponent object={object} array={array} func={func} />
				<ImpureClassComponent object={object} array={array} func={func} />
			</div>
		);
	}
}
