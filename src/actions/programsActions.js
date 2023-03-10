import axios from "axios";
import { returnErrors } from './errorActions';
import * as actions from "./types";


var host = process.env.REACT_APP_API;
var remote_host = "https://kmdo-backend.onrender.com/"



export const loadPrograms = () => async (dispatch) => {
    
    //User Loading
    dispatch({ type: actions.LOADING_PROGRAMS });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    await axios.get(`${remote_host}programs/all`,config)
        .then(res => dispatch({
            type: actions.LOADING_PROGRAMS_SUCCESS,
            payload: res.data
        }))
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    returnErrors({ message: "Error Loading programs" }, 500, "LOADING-PROGRAMS-FAIL")
                )
                dispatch({
                    type: actions.LOADING_PROGRAMS_ERROR
                })
            } else {
                dispatch(
                    returnErrors(error.response.data, error.response.status, "LOADING-PROGRAMS-FAIL")
                )
                dispatch({
                    type: actions.LOADING_PROGRAMS_ERROR
                })
            }


        })

};