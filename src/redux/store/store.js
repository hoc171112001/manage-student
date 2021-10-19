import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'; // phục vụ dev quản lý state với redux
//import out library
import reduceAll from '../reducers'
import saga from '../saga/saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reduceAll,composeWithDevTools(applyMiddleware(sagaMiddleware)))


// store.subscribe(()=>{
//     console.log(store.getState());
// })
export default store
sagaMiddleware.run(saga)
