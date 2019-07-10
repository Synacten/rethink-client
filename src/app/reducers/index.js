import { combineReducers } from 'redux';
import mainReducer from './mainReducer';

export default combineReducers({
  monitor: mainReducer,
});
