import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    const app = shallow(<App/>);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });
});