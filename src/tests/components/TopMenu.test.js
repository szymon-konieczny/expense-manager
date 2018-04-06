import * as React from 'react';
import { shallow } from 'enzyme';
import TopMenu from '../../components/TopMenu';

test('should render TopMenu correctly', () => {
    const wrapper = shallow(<TopMenu />);
    expect(wrapper).toMatchSnapshot();
});