import * as type from '../const/const'
let initState = {
        data:[],
        loading:false,
        message:""
};

export function studentReducer(state = { initState }, action) {
  switch (action.type) {
    case type.STUDENT_FETCH: {
      return {
        ...state,
            data:[],
            loading:true,
            message:""
      };
    }
    case type.STUDENT_FETCH_SUCCEEDED: {
      return {
      
      };
    }
    case type.STUDENT_FETCH_FAILED: {
      return {
      };
    }
    default: {
      return state;
    }
  }
}
