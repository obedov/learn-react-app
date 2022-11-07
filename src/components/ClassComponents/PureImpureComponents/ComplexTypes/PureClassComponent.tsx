import * as React from 'react';
import { ComplexTypes } from './TestComplexClassComponentsApp';
import { isEqual } from 'lodash';

type PureClassComponentProps = ComplexTypes;

export class PureClassComponent extends React.Component<PureClassComponentProps> {
	private renderCount = 0;

	shouldComponentUpdate(nextProps: Readonly<PureClassComponentProps>): boolean {
		return !isEqual(nextProps, this.props);
	}

	render(): JSX.Element {
		const { object, array, func } = this.props;

		console.count('Render PureClassComponent');
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
