import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import Index from './Index';

const { mount } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

describe('<Index/>', () => {
  it('render correctly (snapshot)', () => {
    const tree = mount(<Index />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
