import * as React from 'react';

interface State {
	count?: number;
}

/*
 *
 * React class lifecycle (initial):
 * 1) constructor
 * 2) getDerivedStateFromProps
 * 3) render
 * 4) componentDidMount
 *
 *
 * React class lifecycle (after button click):
 * 1) getDerivedStateFromProps
 * 2) shouldComponentUpdate
 * 3) render
 * 4) componentDidUpdate
 *
 */

export class ClassLifeCycle extends React.Component<{}, State> {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		console.count('constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.count('getDerivedStateFromProps');
		return {};
	}

	componentDidMount() {
		console.count('componentDidMount');
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
		console.count('componentDidUpdate');
	}

	componentWillUnmount() {
		console.count('componentWillUnmount');
	}

	shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
		console.count('shouldComponentUpdate');
		return true;
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.count('componentDidCatch');
	}

	private onButtonClick = (): void => {
		this.setState(prevState => ({ count: prevState.count + 1 }))
	}

	render() {
		console.count('render');
		const { count } = this.state;

		return (
			<>
				<button onClick={this.onButtonClick}>
					button {count}
				</button>
			</>
		);
	}
}
