import * as React from 'react';
import { useEffect, useState, FC } from 'react';

import { sleep } from '../../functions/sleep/sleep';

export const FuncComponent: FC = () => {
	const [value, setValue] = useState('NOT INITIALISED');

	useEffect(() => {
		sleep(3000);
		setValue(() => 'INITIALISED');
	}, []);

	return (
		<div>
			<b>Func component:</b> {value}
		</div>
	);
};
