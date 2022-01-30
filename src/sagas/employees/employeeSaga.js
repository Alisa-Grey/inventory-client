import { put, takeEvery } from 'redux-saga/effects';
import { 
    GET_EMPLOYEES_REQUEST, GET_EMPLOYEES_RESULT,
} from '../../actions/types';

function* fetchEmployees() {
    let response = yield fetch('http://localhost:5000/api/employees/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': localStorage.getItem('token')
        },
    })
    .then(response => response.json());

    yield put({type: GET_EMPLOYEES_RESULT, response});
};

export default function* watchFetchEmployees() {
    yield takeEvery(GET_EMPLOYEES_REQUEST, fetchEmployees)
}