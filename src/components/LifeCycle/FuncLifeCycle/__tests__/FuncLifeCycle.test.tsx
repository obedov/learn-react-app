import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FuncLifeCycle } from '../FuncLifeCycle';

jest.spyOn(global.console, 'count').mockImplementation();

const renderFuncLifeCycle = (): ShallowWrapper => {
	return shallow(<FuncLifeCycle />);
};

describe('FuncLifeCycle', () => {
	it('should render', () => {
		// given
		// when
		const funcLifeCycle = renderFuncLifeCycle();
		// then
		expect(funcLifeCycle.exists()).toBe(true);
	});
});
