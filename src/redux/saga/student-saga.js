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
function* studentDetails(action) {
  try {
    const data = yield call(api.fetchStudentDetails, action.payload);
    if (data) {
      yield put({ type: type.DETAIL_STUDENT_FETCH_SUCCEEDED,payload:data});
    }
  } catch (e) {
    yield put({ type: type.DETAIL_STUDENT_FETCH_FAILED, message: e.message });
  }
}
function* deleteStudent(action) {
  try {
    yield call(api.deleteStudent, action.payload);
    yield put({ type: type.DELETE_STUDENT_SUCCEEDED});
  } catch (e) {
    yield put({ type: type.DELETE_STUDENT_FAILED, message: e.message });
  }
}

function* createStudent(action) {
  try {
    yield call(api.createStudent, action.payload);
    yield put({ type: type.CREATE_STUDENT_SUCCEEDED});
  } catch (e) {
    yield put({ type: type.CREATE_STUDENT_FAILED, message: e.message });
  }
}
function* updateStudent(action) {
  try {
    yield call(api.updateStudent, action.payload);
    yield put({ type: type.UPDATE_STUDENT_SUCCEEDED});
  } catch (e) {
    yield put({ type: type.UPDATE_STUDENT_FAILED, message: e.message });
  }
}
function* studentSaga() {
  yield takeEvery(type.STUDENT_FETCH, student);
  yield takeEvery(type.DELETE_STUDENT, deleteStudent);
  yield takeEvery(type.CREATE_STUDENT, createStudent);
  yield takeEvery(type.UPDATE_STUDENT, updateStudent);
  yield takeEvery(type.DETAIL_STUDENT_FETCH, studentDetails);
}

export default studentSaga;
