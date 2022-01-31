import { LoginActionTypes } from "../actions/types";

const initialState = [];

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginActionTypes.REGISTER_REQUEST:
            return {
                ...state, employee: action.employee
            };
        case LoginActionTypes.REGISTER_RESULT:
            return {
                ...state, result: action.response
            };
        default:
            return state;
    }
}