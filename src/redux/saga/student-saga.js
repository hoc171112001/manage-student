import { call, put, takeEvery } from "redux-saga/effects";
//import out library
import * as api from "../../api/auth";
import * as type from "../const/const";
// worker Saga: will be fired on USER_LOGIN actions
function* student(action) {
  try {
    const data = yield call(api.fetchStudent, action.payload);
    if (data) {
      yield put({ type: type.STUDENT_FETCH_SUCCEEDED,payload:{data}});
    }
  } catch (e) {
    yield put({ type: type.STUDENT_FETCH_FAILED, message: e.message });
  }
}

function* mySaga2() {
  yield takeEvery(type.STUDENT_FETCH, student);
}

export default mySaga2;
