import { all } from 'redux-saga/effects';
import { watchFetchRooms, watchAddRooms } from './rooms/roomSaga';
import watchFetchItems from './items/itemSaga';
import watchFetchUsers from './users/userSaga';

export function* rootSaga() {
    yield all([
        watchFetchRooms(),
        watchAddRooms(),
        watchFetchItems(),
        watchFetchUsers(),
    ])
};