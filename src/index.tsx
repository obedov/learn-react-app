import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ClassComponent } from './components/FuncClassComparison/ClassComponent';
import { FuncComponent as FuncComponent1 } from './components/FuncClassComparison/FuncComponent';
import { FuncComponent as FuncComponent2 } from './components/FuncComponents/FuncComponent';
import { ClassLifeCycle } from './components/LifeCycle/ClassLifeCycle';
import { TestClassComponentsApp } from './components/ClassComponents/TestClassComponentsApp';

const App: React.FC = () => {
    return (
        <>
            <div>
                <ClassLifeCycle/>
            </div>
        </>
    );
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);