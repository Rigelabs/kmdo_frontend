import * as actions from "../actions/types";


const initialState = {

    isLoading: false,
    areas: null,
    villages: null,

}
export default function villageReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOADING_AREAS:
        case actions.LOADING_VILLAGES:
            return { ...state, isLoading: true };
        case actions.LOAD_AREAS:
            return {
                ...state, isLoading: false, areas: action.payload

            }
        case actions.LOAD_VILLAGES:
            return {
                ...state, isLoading: false, villages: action.payload

            }
        case actions.LOADING_AREAS_FAIL:
        case actions.LOADING_VILLAGES_FAIL:

            return {
                ...state, isLoading: false,
            }
        default:
            return state;
    }
}