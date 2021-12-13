import {combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { classReducer } from './classReducer'
import {studentReducer} from './studentReducer'
import {teacherReducer} from './teacherReducer'


let reduceAll = combineReducers({auth: authReducer,student:studentReducer,classes:classReducer,teacher:teacherReducer})
export default reduceAll