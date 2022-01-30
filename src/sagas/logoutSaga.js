import { put, takeEvery } from 'redux-saga/effects';
import { LOGOUT } from '../actions/types';

function* logout() {
   yield localStorage.removeItem('token');
   yield localStorage.removeItem('admin')
}

export default function* watchLogout() {
    yield takeEvery(LOGOUT, logout)
}