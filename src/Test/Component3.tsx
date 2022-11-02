import * as React from 'react';

interface State {
    count?: number;
}

export default class Component3 extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.count('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.count('getDerivedStateFromProps');
        return {};
    }

    componentDidMount() {
        console.count('componentDidMount');
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        console.count('componentDidUpdate');
    }

    componentWillUnmount() {
        console.count('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.count('shouldComponentUpdate');
        return true;
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.count('componentDidCatch');
    }

    render() {
        console.count('render');
        const {count} = this.state;
        return (
            <>
                <button onClick={() => {
                    this.setState(prevState => ({count: prevState.count + 1}))
                }}>
                    button {count}
                </button>
            </>
        );
    }
}
