import { RoomActionTypes } from "../actions/types";
import { IAction, IRoomState } from "../../types/types";

const inintialState: IRoomState = {
    loading: false,
    adding: false,
    rooms: [],
    addResult: '',
};

export const roomsReducer = (state = inintialState, action: IAction): IRoomState => {
    switch (action.type) {
        case RoomActionTypes.GET_ROOMS_REQUEST:
            return {
                ...state, loading: true
            };
        case RoomActionTypes.GET_ROOMS_RESULT:
            return {
                ...state, loading: false, rooms: action.payload
            };
        case RoomActionTypes.ADD_ROOM_REQUEST:
            return {
                ...state, adding: true
            }
        case RoomActionTypes.ADD_ROOM_RESULT: 
            return {
                ...state, adding: false, addResult: action.payload
            }
        default:
            return state;
    }
}