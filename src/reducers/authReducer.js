import * as actions from "../actions/types";


const initialState = {

    isLoading: false,
    user: null,
    isAuthenticated: false,
    token: null,


}
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actions.REGISTERING_USER:
        case actions.LOGGING_USER:
        case actions.REQUESTING_CODE:
        case actions.CHANGE_PASSWORD:
        case actions.LOADING_USER:
            return { ...state, isLoading: true };

        case actions.CHANGE_PASSWORD_SUCCESS:
        case actions.LOGGING_USER_SUCCESS:

            return { ...state, isLoading: false, user: action.payload.user, token: action.payload.token, isAuthenticated: true };
        case actions.USER_LOADING_SUCCESS:
            return { ...state, isLoading: false, user: action.payload, isAuthenticated: true };
        case actions.REGISTER_SUCCESS:
        case actions.REQUESTING_CODE_SUCCESS:
            return { ...state, isLoading: false };
        case actions.SIGNUP_ERROR:
        case actions.REQUESTING_CODE_ERROR:
            return { ...state, isLoading: false };
        case actions.CHANGE_PASSWORD_ERROR:
        case actions.LOGGING_USER_ERROR:
        case actions.USER_LOADING_ERROR:
            return { ...state, isLoading: false, isAuthenticated: false, token: null, user: null };
        default:
            return state;
    }

}