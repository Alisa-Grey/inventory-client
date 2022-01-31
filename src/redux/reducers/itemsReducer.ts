import { IAction } from "../../types/types";
import { ItemActionTypes } from "../actions/types";
import { IItemState } from "../../types/types";

const inintialState = {
    loading: false,
    items: []
};

export const inventoriesReducer = (state = inintialState, action: IAction): IItemState => {
    switch (action.type) {
        case ItemActionTypes.GET_ITEMS_REQUEST:
            return {
                ...state, loading: true
            };
        case ItemActionTypes.GET_ITEMS_RESULT:
            return {
                ...state, loading: false, items: action.payload
            };
        default:
            return state;
    }
}