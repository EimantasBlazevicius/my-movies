import { takeEvery, put } from 'redux-saga/effects';
import { getUser, getUserSuccess } from './index';


function* getUserFetch() {
    const data = {name: "John Doe"};
    yield put(getUserSuccess(data));
}  

function* userSaga() {
    yield takeEvery(getUser.type, getUserFetch);
}

export default userSaga;