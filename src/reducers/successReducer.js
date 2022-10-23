import { CLEAR_SUCCESS, GET_SUCCESS } from "../actions/types";
const initialState ={
    msg:{},
    status: null,
    id: null
}

export default function successReducer(state=initialState, action){
    switch(action.type){
        case GET_SUCCESS: return{
            msg: action.payload.msg,
            status: action.payload.status,
            id: action.payload.id
        };
       
        case CLEAR_SUCCESS: return{
            msg: {},
            status: null,
            id: null
        };
        default:
             return state
    }
}