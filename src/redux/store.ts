import { createStore, combineReducers } from 'redux';
import { textReducer } from './reducers';

const reducer = combineReducers({ counters: textReducer });

export const store = createStore(reducer);