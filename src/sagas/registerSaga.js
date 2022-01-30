import { put, takeEvery } from 'redux-saga/effects';
import { REGISTER_REQUEST, REGISTER_RESULT } from '../actions/types';

function* fetchRegistration(data) {
    let response = yield fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            name: data.employee.name,
            lastName: data.employee.lastName,
            email: data.employee.email,
            password: data.employee.password,
            phone: data.employee.phone,
            admin: data.employee.admin
        })
    });
    yield put({type: REGISTER_RESULT, response})
}

export default function* watchFetchRegistration() {
    yield takeEvery(REGISTER_REQUEST, fetchRegistration)
}