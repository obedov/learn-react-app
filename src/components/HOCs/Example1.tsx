import * as React from 'react';

/**
 * https://reactjs.org/docs/higher-order-components.html
 * higher-order component is a function that takes a component and returns a new component.
 */

// There is a component defined as:
const Add = ({ a, b }) => (
	<p>
		{a} + {b} = {a + b}
	</p>
);

// Example of HOC class component that will add 1 to each numeric property passed to the component
function classWrap(Component) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { ...props };
			for (const key in this.state) this.state[key] += 1;
		}

		render() {
			return <Component {...this.state} />;
		}
	};
}

// Example of HOC func component that will add 1 to each numeric property passed to the component
const funcWrap = Component => ({ ...props }) => {
    const state = { ...props };
    for (const key in state) state[key] += 1;
    return <Component {...state} />;
};

const ClassWrappedAdd = classWrap(Add);
const FuncWrappedAdd = funcWrap(Add);

export const Example1 = (): JSX.Element => {
	return (
		<>
			<Add a={1} b={2} />
			{/*
            // @ts-ignore */}
			<ClassWrappedAdd a={1} b={2} />
			{/*
            // @ts-ignore */}
			<FuncWrappedAdd a={1} b={2} />
		</>
	);
};
