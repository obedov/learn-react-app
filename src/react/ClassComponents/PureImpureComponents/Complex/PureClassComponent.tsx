import * as React from 'react';
import { isEqual } from 'lodash';

import { ComplexTypes } from './TestComplexClassComponentsApp';

export class PureClassComponent extends React.Component<ComplexTypes> {
	private renderCount = 0;

	shouldComponentUpdate(nextProps: Readonly<ComplexTypes>): boolean {
		return !isEqual(nextProps, this.props);
	}

	render(): JSX.Element {
		const { object, array, func } = this.props;

		console.count('render PureClassComponent');
		this.renderCount++;

		return (
			<div>
				<h2>PureClassComponent (Complex):</h2>
				<div>object: {object?.string}</div>
				<div>array: {array}</div>
				<div>func: {func?.toString()}</div>
				<br />
				<div>
					<b>render pure count:</b> {this.renderCount}
				</div>
			</div>
		);
	}
}
