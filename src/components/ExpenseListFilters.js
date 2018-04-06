import * as React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        switch (e.target.value) {
            case 'date':
                return this.props.sortByDate(e.target.value);
            case 'amount':
                return this.props.sortByAmount(e.target.value);
        }
    };
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={ this.props.filters.text } 
                    onChange={ this.onTextChange }
                />
                <select 
                    value={ this.props.filters.sortBy }
                    onChange={ this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={ this.props.filters.startDate }
                    startDateId={ uuid() }
                    endDate={ this.props.filters.endDate }
                    endDateId={ uuid() }
                    onDatesChange={ this.onDatesChange }
                    focusedInput={ this.state.calendarFocused }
                    onFocusChange={ this.onFocusChange }
                    showClearDates={ true }
                    numberOfMonths={ 1 }
                    isOutsideRange={() => false }
                />
        </div>
        );
    };
};
const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate)),
    sortByDate: () => dispatch(sortbyDate()),
    sortByAmount: () => dispatch(sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);