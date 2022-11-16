import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { FuncLifeCycle } from './components/LifeCycle/FuncLifeCycle/FuncLifeCycle';

const App: React.FC = () => {
	return (
		<>
			<div>
				<FuncLifeCycle />
			</div>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
