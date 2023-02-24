import axios from "axios";
import { return500, returnErrors } from './errorActions';
import { returnSuccess } from "./successActions";
import * as actions from "./types";


var host = process.env.REACT_APP_API;
var remote_host = "https://kmdo-backend.onrender.com/"

export const loadVillages = () => async (dispatch) => {
    
    //User Loading
    dispatch({ type: actions.LOADING_VILLAGES });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    await axios.get(`${remote_host}village/all`,config)
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
    }
    await axios.get(`${remote_host}village/areas/all`,config)
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
export const villageAdd = ({ name,authToken}) => async (dispatch) => {

        dispatch({ type: actions.ADDING_VILLAGE });

        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken
            },
            timeout: 5000
        }
        const data = {name:name}
        await axios.post(`${remote_host}village/create`, data, config)

            .then(res => {
                dispatch({ type: actions.ADDING_VILLAGE_SUCCESS, payload: res.data })
                dispatch(returnSuccess({message:"The village has been created"}, res.status, 'MEMBER-ADD-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.ADDING_VILLAGE_FAIL })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'MEMBER-ADD-FAIL')
                    )
                    dispatch({ type: actions.ADDING_VILLAGE_FAIL })
                }
            })
    }
export const areaAdd = ({ name,village,representative,authToken}) => async (dispatch) => {

        dispatch({ type: actions.ADDING_AREA });

        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken
            },
            timeout: 5000
        }
        const data = {name:name,village:village,representative:representative}
        await axios.post(`${remote_host}village/area/create`, data, config)

            .then(res => {
                dispatch({ type: actions.ADDING_AREA_SUCCESS, payload: res.data })
                dispatch(returnSuccess({message:"The area has been created"}, res.status, 'MEMBER-ADD-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.ADDING_AREA_FAIL })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'MEMBER-ADD-FAIL')
                    )
                    dispatch({ type: actions.ADDING_AREA_FAIL })
                }
            })
    }
export const updateArea = ({area_id,name,village,representative,authToken}) => async (dispatch) => {

        dispatch({ type: actions.ADDING_AREA });

        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken
            },
            timeout: 5000
        }
        const data = {area_id,name:name,village:village,representative:representative}
        await axios.post(`${remote_host}village/area/update`, data, config)

            .then(res => {
                dispatch({ type: actions.ADDING_AREA_SUCCESS, payload: res.data })
                dispatch(returnSuccess({message:"The area has been updated"}, res.status, 'AREA-ADD-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        returnErrors({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.ADDING_AREA_FAIL })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'AREA-ADD-FAIL')
                    )
                    dispatch({ type: actions.ADDING_AREA_FAIL })
                }
            })
    }