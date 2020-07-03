import { combineReducers } from 'redux';
import counter from './todo';
import data from './data';

export default combineReducers({ counter, data })
