import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_RESULT } from '../actions/types';
import jwt_decode from 'jwt-decode';

function* fetchLogin(data) {
    let response = yield fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            email: data.employee.email,
            password: data.employee.password
        })
    })
    .then(response => response.json())

    const token = response.token;
    let isAdmin;

    if(token) {
        isAdmin = jwt_decode(response.token).isAdmin;
        localStorage.setItem('token', token);
        localStorage.setItem('admin', isAdmin);
    }

    yield put({ type: LOGIN_RESULT, loginStatus: response.statusText });
}

export function* watchFetchLogin() {
    yield takeEvery(LOGIN_REQUEST, fetchLogin);
}