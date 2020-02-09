import  configureTests  from './setupTests';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

configureTests();

describe('App', () => {

    const app = shallow(<App />);

    it('Renders correctly', () => {
        expect(app).toMatchSnapshot();
    })
});