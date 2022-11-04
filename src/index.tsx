import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ClassComponent } from './components/FuncClassComparison/ClassComponent';
import { FuncComponent as FuncComponent1 } from './components/FuncClassComparison/FuncComponent';
import { FuncComponent as FuncComponent2 } from './components/FuncComponents/FuncComponent';
import { ClassLifeCycle } from './components/LifeCycle/ClassLifeCycle';
import {
    TestPrimitiveClassComponentsApp
} from './components/ClassComponents/PureImpureComponents/PrimitiveTypes/TestPrimitiveClassComponentsApp';
import {
    TestComplexClassComponentsApp
} from './components/ClassComponents/PureImpureComponents/ComplexTypes/TestComplexClassComponentsApp';

const App: React.FC = () => {
    return (
        <>
            <div>
                <TestComplexClassComponentsApp/>
            </div>
        </>
    );
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);