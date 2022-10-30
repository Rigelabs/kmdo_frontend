import axios from "axios";
import { returnErrors } from './errorActions';
import * as actions from "./types";

var host = process.env.REACT_APP_API;

export const loadVillages = () => async (dispatch) => {
    
    //User Loading
    dispatch({ type: actions.LOADING_VILLAGES });
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
export const loadAreas = () => async (dispatch) => {
    
    //User Loading
    dispatch({ type: actions.LOADING_AREAS });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        timeout:5000
    }
    await axios.get(`https://kmdo-backend.onrender.com/village/areas/all`,config)
        .then(res => dispatch({
            type: actions.LOAD_AREAS,
            payload: res.data
        }))
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    returnErrors({ message: "Error Loading Areas" }, 500, "LOADING-AREAS-FAIL")
                )
                dispatch({
                    type: actions.LOADING_AREAS_FAIL
                })
            } else {
                dispatch(
                    returnErrors(error.response.data, error.response.status, "LOADING-AREAS-FAIL")
                )
                dispatch({
                    type: actions.LOADING_AREAS_FAIL
                })
            }


        })

};