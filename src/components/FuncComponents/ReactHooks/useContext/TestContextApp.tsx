import * as React from 'react';

import { Component1 as ComponentWithoutContext } from './Example1';
import { Component1 as ComponentWithContext } from './Example2';

export const TestContextApp = (): JSX.Element => {
	return (
		<>
			<div>
				<h1>Component without context (prop drilling)</h1>
				<ComponentWithoutContext />
			</div>
			<div>
				<h1>Component with context</h1>
				<ComponentWithContext />
			</div>
		</>
	);
};
