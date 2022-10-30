import { SET_ADMIN_TAB, SET_AUTH_PAGE, SET_DASH_TAB } from "./types";


export const setAuthPage=(value)=>dispatch=>{
    dispatch({type:SET_AUTH_PAGE,payload:value});
}

export const setDashTab=(value)=>dispatch=>{
    dispatch({type:SET_DASH_TAB,payload:value});
}
export const setAdminTab=(value)=>dispatch=>{
    dispatch({type:SET_ADMIN_TAB,payload:value});
}