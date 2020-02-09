import  configureTests  from './setupTests';
import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

configureTests();

describe('Wallet', () => {
    const wallet = shallow(<Wallet />);

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });
});