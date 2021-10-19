import {combineReducers} from 'redux'
import { authReducer } from './authReducer'
import {studentReducer} from './studentReducer'

let reduceAll = combineReducers({auth: authReducer,student:studentReducer})
export default reduceAll