import { IAction, IUserState } from "../../types/types";
import { UserActionTypes } from "../actions/types";

const inintialState = {
    loading: false,
    users: []
};

export const userReducer = (state = inintialState, action: IAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.GET_USERS_REQUEST:
            return {
                ...state, loading: true
            };
        case UserActionTypes.GET_USERS_RESULT:
            return {
                ...state, loading: false, users: action.payload
            };
        default:
            return state;
    }
}