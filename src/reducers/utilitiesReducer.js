import {
    SET_AUTH_PAGE
} from "../actions/types";
const initialState ={
    auth_page:"sign_in",
    
}

export default function utilitiesReducer(state=initialState, action){
    switch(action.type){
        
        case SET_AUTH_PAGE: return{
            ...state,auth_page:action.payload
        }
        
        default:
             return state
    }
}