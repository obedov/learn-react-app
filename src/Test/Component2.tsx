import * as React from 'react';
import { useEffect, useState, FC } from 'react';
import { sleep } from './Component1';

export const Component2: FC = () => {
    const [value, setValue] = useState(' NOT INITIALISED ');

    useEffect(() => {
        sleep(3000);
        setValue(() => 'INITIALISED')
    }, []);

    return <div>{value}</div>;
}
