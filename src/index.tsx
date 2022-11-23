import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Example1 } from './components/HOCs/Example1';

const App: React.FC = () => {
	return (
		<>
			<Example1 />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
