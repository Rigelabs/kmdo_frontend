import { combineReducers } from 'redux';
import utilitiesReducer from './utilitiesReducer';


export default combineReducers({
  utilities:utilitiesReducer
});