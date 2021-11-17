import { call, put, takeEvery } from "redux-saga/effects";
//import out library
import * as api from "../../api/auth";
import * as type from "../const/const";

function* classes(action) {
    try {
       let data = yield call(api.fetchClasses, action.payload);
      if (data) {
        yield put({ type: type.FETCH_CLASSES_SUCCEEDED,payload:{data}});
      }
    } catch (e) {
      yield put({ type: type.FETCH_CLASSES_FAILED, message: e.message });
    }
  }

  function* classesSaga() {
    yield takeEvery(type.FETCH_CLASSES, classes);
    // yield takeEvery(type.DELETE_STUDENT, deleteStudent);
    // yield takeEvery(type.CREATE_STUDENT, createStudent);
  }
export default classesSaga
