import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TestPrimitiveFuncComponentsApp } from './components/FuncComponents/ReactMemo/Primitive/TestPrimitiveFuncComponentsApp';
import { TestComplexFuncComponentsApp } from './components/FuncComponents/ReactMemo/Complex/TestComplexFuncComponentsApp';

const App: React.FC = () => {
	return (
		<>
			<TestComplexFuncComponentsApp />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
