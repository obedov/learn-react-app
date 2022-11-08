import * as React from 'react';
import { useEffect, useLayoutEffect } from 'react';

export function FuncLifeCycle() {
	useEffect(() => console.count('useEffect'), []);

	useLayoutEffect(() => console.count('useLayoutEffect'), []);

	return <>{console.count('Rendering JSX')}</>;
}
