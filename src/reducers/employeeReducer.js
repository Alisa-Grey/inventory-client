import { GET_EMPLOYEES_REQUEST, GET_EMPLOYEES_RESULT } from "../actions/types";

const inintialState = {
    loading: false,
    result: []
};

export const employeesReducer = (state = inintialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES_REQUEST:
            return {
                ...state, loading: true
            };
        case GET_EMPLOYEES_RESULT:
            return {
                ...state, loading: false, result: action.response
            };
        default:
            return state;
    }
}