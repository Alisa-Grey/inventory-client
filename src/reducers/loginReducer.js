import { LOGIN_REQUEST, LOGIN_RESULT } from "../actions/types";

const initialState = [];

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state, isLogged: false
            };
        case LOGIN_RESULT:
            return {
                ...state, isLogged: true, result: action.response
            };
        default:
            return state;
    }
}