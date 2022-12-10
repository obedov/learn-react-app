import * as React from 'react';
import { FC } from 'react';

import { ClassComponent } from './ClassComponent';
import { FuncComponent } from './FuncComponent';

export const TestFuncClassComparisonApp: FC = () => {
	return (
		<>
			{/*<ClassComponent/>*/}
			<FuncComponent />
		</>
	);
};
