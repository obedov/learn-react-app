import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ClassLifeCycle } from './components/LifeCycle/ClassLifeCycle/ClassLifeCycle';

const App: React.FC = () => {
	return (
		<>
			<div>
				<ClassLifeCycle />
			</div>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
