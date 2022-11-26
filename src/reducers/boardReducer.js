import * as actions from "../actions/types";


const initialState = {

    isLoading: false,
    board: null,
    
}
export default function boardReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOADING_BOARD_MEMBERS:
        case actions.REMOVING_BOARD_MEMBER:
        case actions.UPDATING_BOARD_MEMBER:
        case actions.ADDING_BOARD_MEMBER:
       
            return { ...state, isLoading: true };

        case actions.BOARD_MEMBERS_LOADING_SUCCESS:
        case actions.REMOVING_BOARD_MEMBER_SUCCESS:
            case actions.BOARD_MEMBER_ADDED_SUCCESS:
                case actions.UPDATING_BOARD_MEMBER_SUCCESS:
            return { ...state, isLoading: false, board: action.payload };
       
        case actions.BOARD_MEMBERS_LOADING_ERROR:
        case actions.REMOVING_BOARD_MEMBER_FAIL:
            case actions.BOARD_MEMBER_ADD_FAIL:
                case actions.UPDATING_BOARD_MEMBER_FAIL:
            return { ...state, isLoading: false };
       
        default:
            return state;
    }

}