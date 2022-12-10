import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ClassLifeCycle } from '../ClassLifeCycle';

jest.spyOn(global.console, 'count').mockImplementation();

const renderClassLifeCycle = (): ShallowWrapper => {
	return shallow(<ClassLifeCycle />);
};

describe('ClassLifeCycle', () => {
	it('should render', () => {
		// given
		// when
		const classLifeCycle = renderClassLifeCycle();
		// then
		expect(classLifeCycle.exists()).toBe(true);
	});
});
