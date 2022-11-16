import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TestContextApp } from './components/FuncComponents/ReactHooks/useContext/TestContextApp';

const App: React.FC = () => {
	return (
		<>
			<div>
				<TestContextApp />
			</div>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
