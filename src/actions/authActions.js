import axios from 'axios';
import { return500, returnErrors } from './errorActions';
import { returnSuccess } from './successActions';
import * as actions from "./types";


var host = process.env.REACT_APP_API;

//Register  Action
export const userRegister = ({ contact, full_name,village,area,occupation,
    email, identification_number,registration_number,password }) => async (dispatch) => {

        dispatch({ type: actions.REGISTERING_USER });

        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000
        }
        const data={
            full_name:full_name,identification_number:identification_number,contact:contact,
            email:email,village:village,area:area,occupation:occupation,
            registration_number:registration_number,password:password
        }
        await axios.post(`https://kmdo-backend.onrender.com/auth/user/create`,data, config)

            .then(res => {
                dispatch({ type: actions.REGISTER_SUCCESS, payload: res.data })
                dispatch(returnSuccess(res.data, res.status, 'USER-CREAT-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({message:"Server error, try again"}, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.SIGNUP_ERROR })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'REGISTER-FAIL')
                    )
                    dispatch({ type: actions.SIGNUP_ERROR })
                }
            })
    }

//Register  Action
export const userLogin = ({ contact,password }) => async (dispatch) => {
        dispatch({ type: actions.LOGGING_USER });
        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000
        }
        const data={
           contact:contact,password:password
        }
        await axios.post(`https://kmdo-backend.onrender.com/auth/user/login`,data, config)

            .then(res => {
                dispatch({ type: actions.LOGGING_USER_SUCCESS, payload: res.data })
               
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({message:"Server error, try again"}, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.LOGGING_USER_ERROR })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'LOGIN-FAIL')
                    )
                    dispatch({ type: actions.LOGGING_USER_ERROR })
                }
            })
    }

export const request_code = ({ contact }) => async (dispatch) => {
        dispatch({ type: actions.REQUESTING_CODE });
        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000
        }
        const data={
           contact:contact
        }
        await axios.post(`https://kmdo-backend.onrender.com/auth/user/request_code`,data, config)

            .then(res => {
                dispatch({ type: actions.REQUESTING_CODE_SUCCESS, payload: res.data })
                dispatch(returnSuccess(res.data, res.status, 'USER-CREAT-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({message:"Server error, try again"}, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.REQUESTING_CODE_ERROR })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'REQUEST-CODE-FAIL')
                    )
                    dispatch({ type: actions.REQUESTING_CODE_ERROR })
                }
            })
    }
export const change_password = ({ contact,password,otp_code }) => async (dispatch) => {
        dispatch({ type: actions.CHANGE_PASSWORD });
        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000
        }
        const data={
           contact:contact,password:password,otp_code:otp_code
        }
        await axios.post(`https://kmdo-backend.onrender.com/auth/user/change_password`,data, config)

            .then(res => {
                dispatch({ type: actions.CHANGE_PASSWORD_SUCCESS, payload: res.data })
                dispatch(returnSuccess({message:"Password changed successfully"}, res.status, 'CHANGE-PASSWORD-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({message:"Server error, try again"}, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.CHANGE_PASSWORD_ERROR })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'CHANGE-PASSWORD-FAIL')
                    )
                    dispatch({ type: actions.CHANGE_PASSWORD_ERROR })
                }
            })
    }