import { combineReducers } from 'redux';
import classesReducer from './classes';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  classes: classesReducer,
  filters: filtersReducer,
});

export default rootReducer;
