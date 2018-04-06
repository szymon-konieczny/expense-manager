import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import expensesReducer from './reducers/expenses';
import filterReducer from './reducers/filters';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 3, createdAt: 20010 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2, createdAt: 12389 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1, createdAt: 492749 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));