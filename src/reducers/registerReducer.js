import { REGISTER_REQUEST, REGISTER_RESULT } from "../actions/types";

const initialState = [];

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state, employee: action.employee
            };
        case REGISTER_RESULT:
            return {
                ...state, result: action.response
            };
        default:
            return state;
    }
}