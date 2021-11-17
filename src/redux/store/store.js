import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'; // phục vụ dev quản lý state với redux
//import out library
import reduceAll from '../reducers'
import saga from '../saga/saga'
import studentSaga from '../saga/student-saga'
import classesSaga from '../saga/classes-saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reduceAll,composeWithDevTools(applyMiddleware(sagaMiddleware)))


export default store
sagaMiddleware.run(saga)
sagaMiddleware.run(studentSaga)
sagaMiddleware.run(classesSaga)
