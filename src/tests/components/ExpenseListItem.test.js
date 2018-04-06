import * as React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render expense list item correctly', () => {
    const wrapper = shallow(<ExpenseListItem { ...expenses } />);
    expect(wrapper).toMatchSnapshot();
});