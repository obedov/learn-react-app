import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Example2 } from './react/FuncComponents/ReactHooks/Additional/useCallback/Example2';

const App: React.FC = () => {
	return (
		<>
			<Example2 />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
