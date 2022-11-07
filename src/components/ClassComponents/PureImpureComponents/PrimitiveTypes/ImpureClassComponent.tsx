import * as React from 'react';
import { Primitives } from './TestPrimitiveClassComponentsApp';

type ImpureClassComponentProps = Primitives;

export class ImpureClassComponent extends React.Component<ImpureClassComponentProps> {
	private renderCount = 0;

	render(): JSX.Element {
		const { string, number, boolean } = this.props;

		console.count('Render ImpureClassComponent');
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
