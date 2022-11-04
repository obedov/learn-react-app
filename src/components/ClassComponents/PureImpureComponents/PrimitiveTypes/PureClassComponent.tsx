import * as React from 'react';
import { PureComponent } from 'react';
import { Primitives } from './TestPrimitiveClassComponentsApp';

type PureClassComponentProps = Primitives;

export class PureClassComponent extends PureComponent<PureClassComponentProps> {
    private renderCount = 0;

    render(): JSX.Element {
        const {string, number, boolean} = this.props;

        console.count('Render PureClassComponent');
        this.renderCount++;

        return (
            <div>
                <h2>PureClassComponent (Primitive):</h2>
                <div>string: {string}</div>
                <div>number: {number}</div>
                <div>boolean: {String(boolean)}</div>
                <br/>
                <div><b>render pure count:</b> {this.renderCount}</div>
            </div>
        );
    }
}
