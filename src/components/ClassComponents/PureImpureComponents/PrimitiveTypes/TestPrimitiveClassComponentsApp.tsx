import * as React from 'react';
import { PureClassComponent } from './PureClassComponent';
import { ImpureClassComponent } from './ImpureClassComponent';

export interface Primitives {
    string?: string;
    number?: number;
    boolean?: boolean;
}

type TestPrimitiveClassComponentsAppState = Primitives;

export class TestPrimitiveClassComponentsApp extends React.Component<{}, TestPrimitiveClassComponentsAppState> {
    constructor(props) {
        super(props);
        this.state = {
            string: 'string',
            number: 0,
            boolean: false
        };
    }

    componentDidMount(): void {
        const string = 'new string';
        const number = 1;
        const boolean = true;

        setTimeout(() => this.setState({string, number, boolean}), 1000);
        setTimeout(() => this.setState({string, number, boolean}), 3000);
        setTimeout(() => this.setState({string, number, boolean}), 5000);
    }

    render(): JSX.Element {
        const {string, number, boolean} = this.state;

        return (
            <div className="testPrimitiveClassComponentsApp">
                <PureClassComponent string={string} number={number} boolean={boolean}/>
                <ImpureClassComponent string={string} number={number} boolean={boolean}/>
            </div>
        );
    }
}