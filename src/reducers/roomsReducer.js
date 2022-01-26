import { GET_ROOMS_REQUEST, GET_ROOMS_RESULT } from "../actions/types";

const inintialState = {
    loading: false,
    result: []
};

export const roomsReducer = (state = inintialState, action) => {
    switch (action.type) {
        case GET_ROOMS_REQUEST:
            return {
                ...state, loading: true
            };
        case GET_ROOMS_RESULT:
            return {
                ...state, loading: false, result: action.response
            };
        default:
            return state;
    }
}