import axios from 'axios';
import { return500, returnErrors } from './errorActions';
import { returnSuccess } from './successActions';
import * as actions from "./types";


var host = process.env.REACT_APP_API;
var remote_host = "https://kmdo-backend.onrender.com/"
//Register  Action
export const memberAdd = ({ contact, email, registration_number, full_name, role,
    avatar, village, area,authToken }) => async (dispatch) => {

        dispatch({ type: actions.ADDING_BOARD_MEMBER });

        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken
            },
            timeout: 5000
        }
        const data = {
           role:role, registration_number: registration_number,
           contact:contact, email:email, full_name:full_name,
           avatar:avatar, village:village, area:area
        }
        await axios.post(`${remote_host}board/add/member`, data, config)

            .then(res => {
                dispatch({ type: actions.BOARD_MEMBER_ADDED_SUCCESS, payload: res.data })
                dispatch(returnSuccess({message:"The board member has been added"}, res.status, 'MEMBER-ADD-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.BOARD_MEMBER_ADD_FAIL })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'MEMBER-ADD-FAIL')
                    )
                    dispatch({ type: actions.BOARD_MEMBER_ADD_FAIL })
                }
            })
    }

//REMOVE MEMBER  Action
export const memberRemove = ({ registration_number,authToken }) => async (dispatch) => {
    dispatch({ type: actions.REMOVING_BOARD_MEMBER });
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + authToken
        },
        timeout: 5000
    }
   
    await axios.post(`${remote_host}board/remove/${registration_number}`, {}, config)

        .then(res => {
            dispatch({ type: actions.REMOVING_BOARD_MEMBER_SUCCESS, payload: res.data })

        })
        .catch(error => {
            if (error.response === undefined) {
                dispatch(
                    return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
                )
                dispatch({ type: actions.REMOVING_BOARD_MEMBER_FAIL })
            } else {
                dispatch(
                    returnErrors(error.response.data, error.response.status, 'REMOVE-MEMBER-FAIL')
                )
                dispatch({ type: actions.REMOVING_BOARD_MEMBER_FAIL })
            }
        })
}

//check token and load user
export const loadBoard = () => async (dispatch) => {
    //User Loading
    dispatch({ type: actions.LOADING_BOARD_MEMBERS });

    try {
        
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                   
                },

            }
            await axios.get(`${remote_host}board/all`, config)
                .then(res => {
                    dispatch({
                        type: actions.BOARD_MEMBERS_LOADING_SUCCESS,
                        payload: res.data
                    });
                }).catch(error => {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, "LOADING-MEMBERS-ERROR")
                    );
                    dispatch({ type: actions.BOARD_MEMBERS_LOADING_ERROR })

                })
        
    } catch (error) {
        dispatch({ type: actions.BOARD_MEMBERS_LOADING_ERROR })
    }


};

export const memberUpdate = ({ registration_number,authToken,
    role}) => async (dispatch) => {

        dispatch({ type: actions.UPDATING_BOARD_MEMBER });

        //Headers
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken
            },
           
        }
        const data = new FormData();
        
        if (role) {
            data.append("role", role)
        }
       
        
        await axios.put(`${remote_host}board/member/update/${registration_number}`, data, config)

            .then(res => {
                dispatch({ type: actions.UPDATING_BOARD_MEMBER_SUCCESS, payload: res.data })
                dispatch(returnSuccess({ message: "Account updated successfully" }, res.status, 'USER-UPDATE-SUCCESS'))
            })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(
                        return500({ message: "Server error, try again" }, 500, 'SERVER-ERROR')
                    )
                    dispatch({ type: actions.UPDATING_BOARD_MEMBER_FAIL })
                } else {
                    dispatch(
                        returnErrors(error.response.data, error.response.status, 'MEMBER-UPDATE-FAIL')
                    )
                    dispatch({ type: actions.UPDATING_BOARD_MEMBER_FAIL })
                }
            })
    }

