import { combineReducers } from 'redux';
import { roomsReducer } from './roomsReducer';
import { userReducer } from './userReducer';
import { inventoriesReducer } from './itemsReducer'

export const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: userReducer,
    inventories: inventoriesReducer
});

export type RootState = ReturnType<typeof rootReducer>;