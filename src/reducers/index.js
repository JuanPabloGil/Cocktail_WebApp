import { combineReducers } from 'redux';
import drinks from './drinks';
import filter from './filter';

const allReducers = combineReducers({
  drinks,
  filter,
});

export default allReducers;
