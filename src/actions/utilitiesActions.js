import { SET_AUTH_PAGE } from "./types";


export const setAuthPage=(value)=>dispatch=>{
    dispatch({type:SET_AUTH_PAGE,payload:value});
}