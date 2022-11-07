import * as React from 'react';
import { sleep } from '../../functions/sleep/sleep';

export class ClassComponent extends React.Component {
	state = { value: ' NOT INITIALISED ' };

	componentDidMount() {
		sleep(3000);
		this.setState(() => ({
			value: 'INITIALISED',
		}));
	}

	render() {
		return (
			<div>
				<b>Class component:</b> {this.state.value}
			</div>
		);
	}
}
