import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Example2 } from './components/FuncComponents/ReactHooks/Additional/useRef/Example2';

const App: React.FC = () => {
	return (
		<>
			<Example2 />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
