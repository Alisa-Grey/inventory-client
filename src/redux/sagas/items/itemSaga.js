import { put, takeEvery } from 'redux-saga/effects';
import { ItemActionTypes } from '../../actions/types';

function* fetchItems() {
    let response =  yield fetch('http://localhost:5000/api/inventories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(response => response.json());
    yield put({type: ItemActionTypes.GET_ITEMS_RESULT, response})
}

export default function* watchFetchItems() {
    yield takeEvery(ItemActionTypes.GET_ITEMS_REQUEST, fetchItems)
}