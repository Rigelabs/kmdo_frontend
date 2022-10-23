import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import successReducer from './successReducer';
import utilitiesReducer from './utilitiesReducer';
import villageReducer from './villagesReducer';


export default combineReducers({
  utilities:utilitiesReducer,
  villages:villageReducer,
  errors:errorReducer,
  success:successReducer,
  auth:authReducer
});