import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppRedux } from './redux/AppRedux';

const App: React.FC = () => {
	return (
		<>
			<AppRedux />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
