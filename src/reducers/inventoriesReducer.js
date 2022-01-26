import { GET_INVENTORIES_REQUEST, GET_INVENTORIES_RESULT } from "../actions/types";

const inintialState = {
    loading: false,
    result: []
};

export const inventoriesReducer = (state = inintialState, action) => {
    switch (action.type) {
        case GET_INVENTORIES_REQUEST:
            return {
                ...state, loading: true
            };
        case GET_INVENTORIES_RESULT:
            return {
                ...state, loading: false, result: action.response
            };
        default:
            return state;
    }
}