import { call, put, takeEvery, } from "redux-saga/effects";
//import out library
import * as api from '../../api/auth'
import { saveToken } from "../../helper/helper";
import * as type from '../const/const'
// worker Saga: will be fired on USER_LOGIN actions
function* login(action) {
  try {
    const data = yield call(api.login, action.payload);
    console.log(data);
    if(data.status){
      saveToken(data.token)
      yield put({ type: type.USER_FETCH_SUCCEEDED, payload:{
        username:data.username,
        token:data.token,
        status:data.status
      }});
    }
    else{
    yield put({ type: type.USER_FETCH_FAILED, message: data.message });
    }
  } catch (e) {
    yield put({ type: type.USER_FETCH_FAILED, message: e.message });
  }
}
function* loginGuest(action) {
  try {
    const data = yield call(api.loginGuest, action.payload);
    if(data.status){
      saveToken(data.token)
      yield put({ type: type.GUEST_FETCH_SUCCEEDED, payload:{
        username:data.username,
        token:data.token,
        status:data.status
      }});
    }
    else{
    yield put({ type: type.GUEST_FETCH_FAILED, message: data.message });
    }
  } catch (e) {
    yield put({ type: type.GUEST_FETCH_FAILED, message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_LOGIN` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(type.USER_LOGIN, login);
  yield takeEvery(type.GUEST_LOGIN, loginGuest);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_LOGIN" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_LOGIN", fetchUser);
// }

export default mySaga;
