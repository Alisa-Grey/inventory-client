import { put, takeEvery } from 'redux-saga/effects';
import { RoomActionTypes } from '../../actions/types';
import { IResponseGenerator } from '../../../types/types';

function* fetchRooms() {
    let response:IResponseGenerator = yield fetch('http://localhost:5000/rooms', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    })
    .then(response => response.json());
    yield put({type: RoomActionTypes.GET_ROOMS_RESULT, payload: response})
}

function* watchFetchRooms() {
    yield takeEvery(RoomActionTypes.GET_ROOMS_REQUEST, fetchRooms)
}

function* addRooms() {
    let response:IResponseGenerator = yield fetch('http://localhost:5000/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({  })
    });
    yield put({ type: RoomActionTypes.ADD_ROOM_RESULT, payload: response.statusText })
}

function* watchAddRooms() {
    yield takeEvery(RoomActionTypes.ADD_ROOM_REQUEST, addRooms)
}

export {watchFetchRooms, watchAddRooms}