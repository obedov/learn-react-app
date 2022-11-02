import * as React from 'react';

export default class Component1 extends React.Component {
    state = {value: ' NOT INITIALISED '};

    componentDidMount() {
        sleep(3000);
        this.setState(() => ({
            value: 'INITIALISED'
        }));
    }

    render() {
        return <div>{this.state.value}</div>;
    }
}

export function sleep(duration: number) {
    const start = Date.now();
    let end = start;
    while (end < start + duration) {
        end = Date.now();
    }
}
