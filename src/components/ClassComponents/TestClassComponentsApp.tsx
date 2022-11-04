import * as React from 'react';
import { PureClassComponent } from './PureClassComponent';
import { ImpureClassComponent } from './ImpureClassComponent';

interface TestClassComponentsAppState {
    string?: string;
    number?: number;
    boolean?: boolean;
}

export class TestClassComponentsApp extends React.Component<{}, TestClassComponentsAppState> {
    constructor(props) {
        super(props);
        this.state = {
            string: 'string',
            number: 0,
            boolean: false
        };
    }

    componentDidMount() {
        const string = 'new string';
        const number = 1;
        const boolean = true;

        setTimeout(() => this.setState({string, number, boolean}), 1000);
        setTimeout(() => this.setState({string, number, boolean}), 3000);
        setTimeout(() => this.setState({string, number, boolean}), 5000);
    }

    render() {
        const {string, number, boolean} = this.state;
        return (
            <div className="TestClassComponentsApp">
                <PureClassComponent string={string} number={number} boolean={boolean}/>
                <ImpureClassComponent string={string} number={number} boolean={boolean}/>
            </div>
        );
    }
}