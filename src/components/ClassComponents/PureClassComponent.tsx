import * as React from 'react';
import { PureComponent } from 'react';

interface PureClassComponentProps {
    string?: string;
    number?: number;
    boolean?: boolean;
}

export class PureClassComponent extends PureComponent<PureClassComponentProps> {
    private renderCount = 0;

    render() {
        const {string, number, boolean} = this.props;
        console.count('Render PureClassComponent');
        this.renderCount++;

        return (
            <div>
                <h2>PureClassComponent:</h2>
                <div>string: {string}</div>
                <div>number: {number}</div>
                <div>boolean: {String(boolean)}</div>
                <br/>
                <div><b>render pure count:</b> {this.renderCount}</div>
            </div>
        );
    }
}
