import { CLEAR_SUCCESS, GET_SUCCESS } from './types';

//RETURN ERRORS
export const returnSuccess = (msg, status,id =null) =>{
    return{
        type: GET_SUCCESS,
        payload: {msg, status, id}
    }
}
//CLEAR ERRORS
export const clearSuccess = (id=null) =>{
    return{
        type: CLEAR_SUCCESS
    }
}

