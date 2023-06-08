import { takeEvery, put } from "redux-saga/effects";
import { getUser, getUserSuccess } from "./index";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../initFirebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

function* getUserFetch() {
  if (auth.currentUser !== null) {
    yield put(getUserSuccess(auth.currentUser));
  }
}

function* userSaga() {
  yield takeEvery(getUser.type, getUserFetch);
}

export default userSaga;
