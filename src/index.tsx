import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TestComplexFuncComponentsApp } from './components/FuncComponents/ReactMemo/Complex/TestComplexFuncComponentsApp';

const App: React.FC = () => {
	return (
		<>
			<TestComplexFuncComponentsApp />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
