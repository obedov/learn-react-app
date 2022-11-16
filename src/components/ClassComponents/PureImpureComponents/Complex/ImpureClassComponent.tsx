import * as React from 'react';

import { ComplexTypes } from './TestComplexClassComponentsApp';

export class ImpureClassComponent extends React.Component<ComplexTypes> {
	private renderCount = 0;

	render(): JSX.Element {
		const { object, array, func } = this.props;

		console.count('render ImpureClassComponent');
		this.renderCount++;

		return (
			<div>
				<h2>ImpureClassComponent (Complex):</h2>
				<div>object: {object?.string}</div>
				<div>array: {array}</div>
				<div>func: {func?.toString()}</div>
				<br />
				<div>
					<b>render impure count:</b> {this.renderCount}
				</div>
			</div>
		);
	}
}
