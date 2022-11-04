import * as React from 'react';

interface ImpureClassComponentProps {
    string?: string;
    number?: number;
    boolean?: boolean;
}

export class ImpureClassComponent extends React.Component<ImpureClassComponentProps> {
    private renderCount = 0;

    render() {
        const {string, number, boolean} = this.props;
        console.count('Render ImpureClassComponent');
        this.renderCount++;

        return (
            <div>
                <h2>ImpureClassComponent:</h2>
                <div>string: {string}</div>
                <div>number: {number}</div>
                <div>boolean: {String(boolean)}</div>
                <br/>
                <div><b>render impure count:</b> {this.renderCount}</div>
            </div>
        );
    }
}
