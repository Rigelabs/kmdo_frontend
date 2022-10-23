import * as actions from "../actions/types";


const initialState = {

    isLoading: false,
    user: null,
    isAuthenticated: false,
    token: null

}
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actions.REGISTERING_USER:
        case actions.LOGGING_USER:
            return { ...state, isLoading: true };
        case actions.LOGGING_USER_SUCCESS: {
            return { ...state, isLoading: false, user: action.payload.user, token: action.payload.token,isAuthenticated:true };
        }
        case actions.REGISTER_SUCCESS:
            return { ...state, isLoading: false };
        case actions.SIGNUP_ERROR:
            return { ...state, isLoading: false };
        case actions.LOGGING_USER_ERROR:
            return { ...state, isLoading: false,isAuthenticated:false,token:null,user:null };
        default:
            return state;
    }

}