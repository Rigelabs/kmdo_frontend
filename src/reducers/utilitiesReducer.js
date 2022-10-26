import {
    SET_AUTH_PAGE, SET_DASH_TAB
} from "../actions/types";
const initialState ={
    auth_page:"sign_in",
    dashboard_tab:"account"
}

export default function utilitiesReducer(state=initialState, action){
    switch(action.type){
        
        case SET_AUTH_PAGE: return{
            ...state,auth_page:action.payload
        }
        case SET_DASH_TAB: return{
            ...state,dashboard_tab:action.payload
        }
        default:
             return state
    }
}