import * as React from 'react';

import { Primitives } from './TestPrimitiveClassComponentsApp';

export class ImpureClassComponent extends React.Component<Primitives> {
	private renderCount = 0;

	render(): JSX.Element {
		const { string, number, boolean } = this.props;

		console.count('render ImpureClassComponent');
		this.renderCount++;

		return (
			<div>
				<h2>ImpureClassComponent (Primitive):</h2>
				<div>string: {string}</div>
				<div>number: {number}</div>
				<div>boolean: {String(boolean)}</div>
				<br />
				<div>
					<b>render impure count:</b> {this.renderCount}
				</div>
			</div>
		);
	}
}
