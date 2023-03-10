import * as actions from "../actions/types";


const initialState = {

    isLoading: false,
    programs: null,

}
export default function programsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOADING_PROGRAMS:
            return { ...state, isLoading: true };
        case actions.LOADING_PROGRAMS_SUCCESS:
            return {
                ...state, isLoading: false, programs: action.payload

            }
        case actions.LOADING_PROGRAMS_ERROR:

            return {
                ...state, isLoading: false,
            }
        default:
            return state;
    }
}