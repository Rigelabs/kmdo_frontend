import * as actions from "../actions/types";


const initialState = {

    isLoading: false,
    user: null,
    isAuthenticated: false,
    token: null,
    members: null

}
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actions.REGISTERING_USER:
        case actions.LOGGING_USER:
        case actions.REQUESTING_CODE:
        case actions.CHANGE_PASSWORD:
        case actions.LOADING_USER:
        case actions.UPDATING_USER:
        case actions.LOADING_USERS:
            return { ...state, isLoading: true };

        case actions.CHANGE_PASSWORD_SUCCESS:
        case actions.LOGGING_USER_SUCCESS:

            return { ...state, isLoading: false, user: action.payload.user, token: action.payload.token, isAuthenticated: true };
        case actions.USER_LOADING_SUCCESS:
        case actions.UPDATING_USER_SUCCESS:
            return { ...state, isLoading: false, user: action.payload, isAuthenticated: true };
        case actions.REGISTER_SUCCESS:
        case actions.REQUESTING_CODE_SUCCESS:
            return { ...state, isLoading: false };
        case actions.USERS_LOADING_SUCCESS:

            return { ...state, isLoading: false, users: action.payload };
        case actions.SIGNUP_ERROR:
        case actions.REQUESTING_CODE_ERROR:
        case actions.UPDATING_USER_ERROR:
        case actions.USERS_LOADING_SUCCESS:
            return { ...state, isLoading: false };
        case actions.CHANGE_PASSWORD_ERROR:
        case actions.LOGGING_USER_ERROR:
        case actions.USER_LOADING_ERROR:
        case actions.LOGOUT_SUCCESS:
            return { ...state, isLoading: false, isAuthenticated: false, token: null, user: null };
        default:
            return state;
    }

}