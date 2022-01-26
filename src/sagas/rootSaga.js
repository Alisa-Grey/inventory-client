import { all } from 'redux-saga/effects';
import watchFetchRegistration from './registerSaga';
import { watchFetchLogin } from './loginSaga';
import watchFetchRooms from './rooms/roomSaga';
import watchFetchInventories from './inventories/inventorySaga';
import watchFetchEmployees from './employees/employeeSaga';
import watchCurrentEmployee from './employees/currentEmployeeSaga';

export function* rootSaga() {
    yield all([
        watchFetchRegistration(),
        watchFetchLogin(),
        watchFetchRooms(),
        watchFetchInventories(),
        watchFetchEmployees(),
        watchCurrentEmployee(),
    ])
};