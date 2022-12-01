import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Example1 } from './examples/Example1';

export const AppRedux: React.FC = () => {
	return (
		<Provider store={store}>
			<Example1 />
		</Provider>
	);
};
