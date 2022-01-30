import { put, takeEvery } from 'redux-saga/effects';
import { GET_INVENTORIES_REQUEST, GET_INVENTORIES_RESULT } from '../../actions/types';

function* fetchInventories() {
    let response =  yield fetch('http://localhost:5000/api/inventories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(response => response.json());
    yield put({type: GET_INVENTORIES_RESULT, response})
}

export default function* watchFetchInventories() {
    yield takeEvery(GET_INVENTORIES_REQUEST, fetchInventories)
}