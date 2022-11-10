import axios from "axios";
import { returnErrors } from './errorActions';
import * as actions from "./types";

var host = process.env.REACT_APP_API;
var remote_host = "https://kmdo-backend.onrender.com/";

export const loadBoardmembers = () => async (dispatch) => {
    
    //User Loading
    dispatch({ type: actions.LOADING_BOARD_MEMBERS });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        timeout:5000
    }
    await axios.get(`https://kmdo-backend.onrender.com/village/all`,config)
        .then(res => dispatch({
            type: actions.LOAD_VILLAGES,
            payload: res.data
        }))
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    returnErrors({ message: "Error Loading VILLAGES" }, 500, "LOADING-VILLAGES-FAIL")
                )
                dispatch({
                    type: actions.LOADING_VILLAGES_FAIL
                })
            } else {
                dispatch(
                    returnErrors(error.response.data, error.response.status, "LOADING-VILLAGES-FAIL")
                )
                dispatch({
                    type: actions.LOADING_VILLAGES_FAIL
                })
            }


        })

};
export const loadReports = () => async (dispatch) => {
    
    //User Loading
    dispatch({ type: actions.LOADING_REPORTS });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        timeout:5000
    }
    await axios.get(`${remote_host}reports/all`,config)
        .then(res => dispatch({
            type: actions.REPORTS_LOADING_SUCCESS,
            payload: res.data
        }))
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    returnErrors({ message: "Error Loading reports" }, 500, "LOADING-REPORTS-FAIL")
                )
                dispatch({
                    type: actions.REPORTS_LOADING_ERROR
                })
            } else {
                dispatch(
                    returnErrors(error.response.data, error.response.status, "LOADING-REPORTS-FAIL")
                )
                dispatch({
                    type: actions.REPORTS_LOADING_ERROR
                })
            }


        })

};