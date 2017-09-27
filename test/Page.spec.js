import React from 'react';
import Page from '../assets/js/Page.js';

describe('<Page>', () => {
	const wrapper = shallow(<Page />);
	it('Says hello world!', () => {
		expect(wrapper.contains('Hello World!')).to.equal(true);
	})
})