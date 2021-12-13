import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "../../api/teacherApi";
import * as type from "../const/const";

function* teacher(action) {
  try {
    const data = yield call(api.fetchTeacher, action.payload);
    if (data) {
      yield put({ type: type.FETCH_TEACHER_SUCCEEDED, payload: data });
    }
  } catch (e) {
      yield put({type:type.FETCH_TEACHER_FAILED,message:e.message})
  }
}
function* detailsTeacher(action) {
  try {
    const data = yield call(api.fetchDetailsTeacher, action.payload);
    if (data) {
      yield put({ type: type.FETCH_DETAIL_TEACHER_SUCCEEDED, payload: data });
    }
  } catch (e) {
      yield put({type:type.FETCH_DETAIL_TEACHER_FAILED,message:e.message})
  }
}
function* deleteTeacher(action) {
  try {
    yield call(api.deleteTeacher, action.payload);
    yield put({ type: type.DELETE_TEACHER_SUCCEEDED});
  } catch (e) {
      yield put({type:type.DELETE_TEACHER_FAILED,message:e.message})
  }
}
function* createTeacher(action) {
  try {
    yield call(api.createTeacher, action.payload);
    yield put({ type: type.CREATE_TEACHER_SUCCEEDED});
  } catch (e) {
      yield put({type:type.CREATE_TEACHER_FAILED,message:e.message})
  }
}
function* updateListTeacher(action) {
  try {
    yield call(api.updateListTeacher, action.payload);
    yield put({ type: type.UPDATE_TEACHER_SUCCEEDED});
  } catch (e) {
      yield put({type:type.UPDATE_TEACHER_FAILED,message:e.message})
  }
}


function* teacherSaga() {
  yield takeEvery(type.FETCH_TEACHER, teacher);
  yield takeEvery(type.DELETE_TEACHER, deleteTeacher);
  yield takeEvery(type.FETCH_DETAIL_TEACHER, detailsTeacher);
  yield takeEvery(type.UPDATE_TEACHER, updateListTeacher);
  yield takeEvery(type.CREATE_TEACHER, createTeacher);
}
export default teacherSaga;
