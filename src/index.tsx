import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Example } from './components/FuncComponents/ReactHooks/Basic/useEffect/Example';

const App: React.FC = () => {
	return (
		<>
			<Example />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
