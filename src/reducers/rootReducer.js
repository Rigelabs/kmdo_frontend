import { combineReducers } from 'redux';
import aboutusReducer from './aboutusReducer';
import authReducer from './authReducer';
import boardReducer from './boardReducer';
import errorReducer from './errorReducer';
import programsReducer from './programsReducer';
import successReducer from './successReducer';
import utilitiesReducer from './utilitiesReducer';
import villageReducer from './villagesReducer';


export default combineReducers({
  utilities:utilitiesReducer,
  villages:villageReducer,
  errors:errorReducer,
  success:successReducer,
  auth:authReducer,
  about_us:aboutusReducer,
  board:boardReducer,
  programs:programsReducer
});