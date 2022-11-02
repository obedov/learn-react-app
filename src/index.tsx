import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Component1 from './Test/Component1';
import { Component2 } from './Test/Component2';
import { Component4 } from './Test/Component4';
import Component3 from './Test/Component3';

const App: React.FC = () => {
    return (
        <Component3/>
    );
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);