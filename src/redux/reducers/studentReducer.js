import * as type from '../const/const'
let initState = {
        data:[],
        loading:false,
        message:"",
        total:0
};

export function studentReducer(state = { initState }, action) {
  switch (action.type) {
    case type.STUDENT_FETCH: {
      return {
        ...state,
            data:[],
            loading:true,
            message:"",
            total:0
      };
    }
    case type.STUDENT_FETCH_SUCCEEDED: {
      return {
        ...state,
            data:action.payload.data.listData,
            loading:false,
            message:"",
            total:Number(action.payload.data.total)
      };
    }
    case type.STUDENT_FETCH_FAILED: {
      return {
        ...state,
        data:[],
        loading:false,
        message:action.message,
        total:0
      };
    }
    default: {
      return state;
    }
  }
}
