// import { call, put, takeEvery, } from "redux-saga/effects";
// //import out library
// import * as api from "../../api/auth";
// import * as type from '../const/const'
// // worker Saga: will be fired on USER_LOGIN actions
// function* student(action) {
//   try {
//     const data = yield call(api.login, action.payload);
//     console.log(data);
//     if(data.status){
//       saveToken(data.token)
//       yield put({ type: type.USER_FETCH_SUCCEEDED});
//     }
//     else{
//     yield put({ type: type.USER_FETCH_FAILED, message: data.message });
//     }
//   } catch (e) {
//     yield put({ type: type.USER_FETCH_FAILED, message: e.message });
//   }
// }

// function* mySaga() {
//   yield takeEvery(type.STUDENT_FETCH, student);
// }


// export default mySaga;
