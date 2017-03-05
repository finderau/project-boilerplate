import { combineReducers } from 'redux';
import firstReducer from './firstReducer';

const rootReducer = combineReducers({
  firstReducer,
});

export default rootReducer;
