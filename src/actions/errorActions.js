import { CLEAR_ERRORS, GET_ERRORS, SERVER_ERROR } from './types';

//RETURN ERRORS
export const returnErrors = (msg, status,id =null) =>{
    return{
        type: GET_ERRORS,
        payload: {msg, status, id}
    }
}
//RETURN SERVER FAILURE
export const return500 = (msg, status,id =null) =>{
    return{
        type: SERVER_ERROR,
        payload: {msg, status, id}
    }
}


//CLEAR ERRORS
export const clearErrors = (id=null) =>{
    return{
        type: CLEAR_ERRORS
    }
}
