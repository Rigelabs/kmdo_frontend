import * as actions from "../actions/types";


const initialState = {

    isLoading: false,
    board_members: null,
    area_reps: null,
    reports: null,
}
export default function aboutusReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOADING_AREA_REPS:
        case actions.LOADING_BOARD_MEMBERS:
        case actions.LOADING_REPORTS:
            return { ...state, isLoading: true };
        case actions.REPORTS_LOADING_SUCCESS:
            return {
                ...state, isLoading: false, reports: action.payload

            }
        case actions.AREA_REPS_LOADING_SUCCESS:
            return {
                ...state, isLoading: false, area_reps: action.payload

            }
        case actions.BOARD_MEMBERS_LOADING_SUCCESS:
            return {
                ...state, isLoading: false, area_reps: action.payload

            }
        case actions.REPORTS_LOADING_ERROR:
        case actions.AREA_REPS_LOADING_ERROR:
        case actions.BOARD_MEMBERS_LOADING_ERROR:
            return {
                ...state, isLoading: false,
            }
        default:
            return state;
    }
}