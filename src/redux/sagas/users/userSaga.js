import { put, takeEvery } from 'redux-saga/effects';
import { UserActionTypes } from '../../actions/types';

function* fetchUsers() {
    let response = yield fetch('http://localhost:5000/api/employees/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': localStorage.getItem('token')
        },
    })
    .then(response => response.json());

    yield put({type: UserActionTypes.GET_USERS_RESULT, response});
};

export default function* watchFetchEmployees() {
    yield takeEvery(UserActionTypes.GET_USERS_REQUEST, fetchUsers)
}