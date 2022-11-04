import * as React from 'react';
import { useEffect, useLayoutEffect } from 'react';

export function FuncComponent() {
    useEffect(() => console.log('useEffect1'), []);
    useEffect(() => console.log('useEffect2'), []);

    useLayoutEffect(() => console.log('useLayoutEffect1'), []);
    useLayoutEffect(() => console.log('useLayoutEffect2'), []);

    return <>{console.log('Rendering JSX')}</>;
}