import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';

const reducers = combineReducers({ authenticationReducer });

export default reducers;
