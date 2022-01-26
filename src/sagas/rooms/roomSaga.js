import { put, takeEvery } from 'redux-saga/effects';
import { GET_ROOMS_REQUEST, GET_ROOMS_RESULT } from '../../actions/types';

function* fetchRooms() {
    let response = yield fetch('http://localhost:5000/rooms', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': localStorage.getItem('token')
        },
    })
    .then(response => response.json());
    yield put({type: GET_ROOMS_RESULT, response})
}

export default function* watchFetchRooms() {
    yield takeEvery(GET_ROOMS_REQUEST, fetchRooms)
}