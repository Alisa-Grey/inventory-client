import { put, takeEvery } from 'redux-saga/effects';
import { GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_RESULT } from '../../actions/types';

function* fetchCurrentEmployee() {
    const token = localStorage.getItem('token');

    let response = yield fetch('http://localhost:5000/api/employees/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': token
        }
    })
    .then(response => response.json());

    yield put({type: GET_EMPLOYEE_RESULT, response})
};

export default function* watchCurrentEmployee() {
    yield takeEvery(GET_EMPLOYEE_REQUEST, fetchCurrentEmployee)
}