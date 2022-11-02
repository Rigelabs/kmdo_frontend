import axios from 'axios';
import { return500, returnErrors } from './errorActions';
import { returnSuccess } from './successActions';
import * as actions from "./types";


var host = process.env.REACT_APP_API;
var remote_host = "https://kmdo-backend.onrender.com/"
//Register  Action
export const userRegister = ({ contact, full_name, village, area, occupation,
    email, identification_number, registration_number }) => async (dispatch) => {

        dispatch({ type: actions.REGISTERING_USER });

        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000
        }
        const data = {
            full_name: full_name, identification_number: identification_number, contact: contact,
            email: email, village: village, area: area, occupation: occupation,
            registration_number: registration_number
        }
        await axios.post(`${remote_host}auth/user/create`, data, config)

            .then(res => {
                dispatch({ type: actions.REGISTER_SUCCESS, payload: res.data })
                dispatch(returnSuccess(res.data, res.status, 'USER-CREAT-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
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
export const userLogin = ({ contact, password }) => async (dispatch) => {
    dispatch({ type: actions.LOGGING_USER });
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 5000
    }
    const data = {
        contact: contact, password: password
    }
    await axios.post(`${remote_host}auth/user/login`, data, config)

        .then(res => {
            dispatch({ type: actions.LOGGING_USER_SUCCESS, payload: res.data })

        })
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
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
    const data = {
        contact: contact
    }
    await axios.post(`${remote_host}auth/user/request_code`, data, config)

        .then(res => {
            dispatch({ type: actions.REQUESTING_CODE_SUCCESS, payload: res.data })
            dispatch(returnSuccess(res.data, res.status, 'USER-CREAT-SUCCESS'))
        })
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
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
export const change_password = ({ contact, password, otp_code }) => async (dispatch) => {
    dispatch({ type: actions.CHANGE_PASSWORD });
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 5000
    }
    const data = {
        contact: contact, password: password, otp_code: otp_code
    }
    await axios.post(`${remote_host}auth/user/change_password`, data, config)

        .then(res => {
            dispatch({ type: actions.CHANGE_PASSWORD_SUCCESS, payload: res.data })
            dispatch(returnSuccess({ message: "Password changed successfully" }, res.status, 'CHANGE-PASSWORD-SUCCESS'))
        })
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
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

//check token and load user
export const loadUser = (authToken) => async (dispatch) => {
    //User Loading
    dispatch({ type: actions.LOADING_USER });

    try {
        if (authToken) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + authToken
                },

            }
            await axios.get(`${remote_host}auth/user/`, config)
                .then(res => {
                    dispatch({
                        type: actions.USER_LOADING_SUCCESS,
                        payload: res.data
                    });
                }).catch(error => {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, "LOADING-USER-ERROR")
                    );
                    dispatch({ type: actions.USER_LOADING_ERROR })

                })
        }
    } catch (error) {
        dispatch({ type: actions.USER_LOADING_ERROR })
    }


};
//check token and load user
export const loadUsers = ({ authToken }) => async (dispatch) => {
    //User Loading
    dispatch({ type: actions.LOADING_USERS });

    try {
        if (authToken) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + authToken
                },

            }
            await axios.get(`${remote_host}auth/users/all`, config)
                .then(res => {
                    dispatch({
                        type: actions.USERS_LOADING_SUCCESS,
                        payload: res.data
                    });
                }).catch(error => {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, "LOADING-USERS-ERROR")
                    );
                    dispatch({ type: actions.USERS_LOADING_ERROR })

                })
        }
    } catch (error) {
        dispatch({ type: actions.USERS_LOADING_ERROR })
    }


};
//check token and search user
export const searchUsers = ({ authToken, keyword }) => async (dispatch) => {
    //User Loading
    dispatch({ type: actions.LOADING_USERS });

    try {
        if (authToken) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + authToken
                },

            }
            const data = { keyword: keyword }
            await axios.post(`${remote_host}auth/users/search`, data, config)
                .then(res => {
                    dispatch({
                        type: actions.USERS_LOADING_SUCCESS,
                        payload: res.data
                    });
                }).catch(error => {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, "LOADING-USERS-ERROR")
                    );
                    dispatch({ type: actions.USERS_LOADING_ERROR })

                })
        }
    } catch (error) {
        dispatch({ type: actions.USERS_LOADING_ERROR })
    }


};
export const userUpdate = ({ contact, full_name, village, area, occupation, authToken,
    email, identification_number, registration_number, avatar, status }) => async (dispatch) => {

        dispatch({ type: actions.UPDATING_USER });

        //Headers
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': "Bearer " + authToken
            },
           
        }
        const data = new FormData();
        if (full_name) {
            data.append("full_name", full_name)
        }
        if (identification_number) {
            data.append("identification_number", identification_number)
        }
        if (contact) {
            data.append("contact", contact)
        }
        if (email) {
            data.append("email", email)
        }
        if (village) {
            data.append("village", village)
        }
        if (area) {
            data.append("area", area)
        }
        if (occupation) {
            data.append("occupation", occupation)
        }
        if (registration_number) {
            data.append("registration_number", registration_number)
        }
        if (status) {
            data.append("status", status)
        }
        if (avatar) {
            for (let i = 0; i < avatar.length; i++) {
                data.append("avatar", avatar[i])
            }

        }
        await axios.put(`${remote_host}auth/user/update`, data, config)

            .then(res => {
                dispatch({ type: actions.UPDATING_USER_SUCCESS, payload: res.data })
                dispatch(returnSuccess({ message: "Account updated successfully" }, res.status, 'USER-UPDATE-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.UPDATING_USER_ERROR })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'USER-UPDATE-FAIL')
                    )
                    dispatch({ type: actions.UPDATING_USER_ERROR })
                }
            })
    }
export const adminMemberUpdate = ({ contact, authToken, rank, status }) => async (dispatch) => {

    dispatch({ type: actions.ADMIN_UPDATING_USER });

    //Headers
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer " + authToken
        },
        timeout: 10000
    }
    const data = new FormData();

    if (contact) {
        data.append("contact", contact)
    }

    if (status) {
        data.append("status", status)
    }
    if (rank) {
        data.append("rank", rank)
    }
    await axios.put(`${remote_host}auth/user/update`, data, config)

        .then(res => {
            dispatch({ type: actions.ADMIN_UPDATING_USER_SUCCESS, payload: res.data });
            
            dispatch(returnSuccess({ message: "Account updated successfully" }, res.status, 'USER-UPDATE-SUCCESS'))
        })
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
                )
                dispatch({ type: actions.ADMIN_UPDATING_USER_ERROR })
            } else {
                dispatch(
                    returnErrors(error.response.data, error.response.status, 'USER-UPDATE-FAIL')
                )
                dispatch({ type: actions.ADMIN_UPDATING_USER_ERROR })
            }
        })
}
//Logout user
export const logout = ({ user_id }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },

        timeout: 5000
    }
    axios.post(`${remote_host}auth/user/logout`, { user_id: user_id }, config).then(done => {
        dispatch({ type: actions.LOGOUT_SUCCESS })
        dispatch({ type: actions.CLEAR_ERRORS });
        dispatch({ type: actions.CLEAR_SUCCESS });
    }).catch(error => {
        dispatch({ type: actions.LOGOUT_SUCCESS })
        dispatch({ type: actions.CLEAR_ERRORS });
        dispatch({ type: actions.CLEAR_SUCCESS });
    })


}