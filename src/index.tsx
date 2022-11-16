import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Example } from './components/FuncComponents/ReactHooks/useState/Example';

const App: React.FC = () => {
	return (
		<>
			<div>
				<Example />
			</div>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
