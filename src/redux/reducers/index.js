import {combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { classReducer } from './classReducer'
import {studentReducer} from './studentReducer'

let reduceAll = combineReducers({auth: authReducer,student:studentReducer,classes:classReducer})
export default reduceAll