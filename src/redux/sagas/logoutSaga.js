import { put, takeEvery } from 'redux-saga/effects';
import { LoginActionTypes } from '../actions/types';

function* logout() {
   yield localStorage.removeItem('token');
   yield localStorage.removeItem('admin')
}

export default function* watchLogout() {
    yield takeEvery(LoginActionTypes.LOGOUT, logout)
}