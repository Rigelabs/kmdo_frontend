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