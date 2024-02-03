// rootReducer.js
import { combineReducers } from 'redux';
import bgColorReducer from './bgColorSlice';

const rootReducer = combineReducers({
  bgColor: bgColorReducer,
});

export default rootReducer;

