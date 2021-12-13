import * as type from '../const/const'
let initState = {
    loading:false,
    success:false,
    data:[],
    total:0,
    deleteMessage:"",
    deleteSuccess:false,
    detailTeacher:[],
    loadingDetails:false,
    updateSuccess:false,
    updateMessage:"",
    createSuccess:false,
    createMessage:""
}
 export function teacherReducer(state={...initState},action){
    switch(action.type){
        case type.FETCH_TEACHER : return {
            ...state,
            loading:true,
            data:[],
            success:false,
            total:0
        }
        case type.FETCH_TEACHER_SUCCEEDED: return {
            ...state,
            loading:false,
            data:action.payload.data,
            success:true,
            total:Number(action.payload.total)
        }
        case type.FETCH_TEACHER_FAILED:return{
            ...state,
            loading:false,
            success:false,
            data:[],
            total:0
        }
        case type.DELETE_TEACHER : return {
            ...state,
            deleteMessage:"",
            deleteSuccess:false
        }
        case type.DELETE_TEACHER_SUCCEEDED: return {
            ...state,
            deleteMessage:"Delete success!",
            deleteSuccess:true
        }
        case type.DELETE_TEACHER_FAILED:return{
            ...state,
            deleteMessage:action.message,
            deleteSuccess:false
        }
        //create teacher
        case type.CREATE_TEACHER : return {
            ...state,
            createMessage:"",
            createSuccess:false
        }
        case type.CREATE_TEACHER_SUCCEEDED: return {
            ...state,
            createMessage:"Create Success!",
            createSuccess:true
        }
        case type.CREATE_TEACHER_FAILED:return{
            ...state,
            createMessage:action.message,
            createSuccess:false
        }
        //update list teacher
        case type.UPDATE_TEACHER : return {
            ...state,
            updateMessage:"",
            updateSuccess:false
        }
        case type.UPDATE_TEACHER_SUCCEEDED: return {
            ...state,
            updateMessage:"Update success!",
            updateSuccess:true
        }
        case type.UPDATE_TEACHER_FAILED:return{
            ...state,
            updateMessage:action.message,
            updateSuccess:false
        }
        case type.FETCH_DETAIL_TEACHER: return{
            ...state,
            loadingDetails:true,
            detailTeacher:[]
        }
        case type.FETCH_DETAIL_TEACHER_SUCCEEDED: return{
            ...state,
            loadingDetails:false,
            detailTeacher:action.payload
        }
        case type.FETCH_DETAIL_TEACHER_FAILED: return{
            ...state,
            loadingDetails:false,
            detailTeacher:[]
        }
        default:return state
    }
}