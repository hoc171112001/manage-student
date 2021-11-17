import * as type from "../const/const";
let initState = {
 data: [], loading: false, message: "", total: 0,deleteSucceed:false,delMessage:"",
 createSucceed:false,creMessage:"",updateMessage:"",updateSucceed:false,dataDetails:[],
 loadingDetails:false,messageDetails:"",
};

export function studentReducer(state = { initState }, action) {
  switch (action.type) {
    case type.STUDENT_FETCH: {
      return {
        ...state,
        data: [],
        loading: true,
        message: "",
        total: 0,
      };
    }
    case type.STUDENT_FETCH_SUCCEEDED: {
      return {
        ...state,
        data: action.payload.data.listData,
        loading: false,
        message: "",
        total: Number(action.payload.data.total),
      };
    }
    case type.STUDENT_FETCH_FAILED: {
      return {
        ...state,
        data: [],
        loading: false,
        message: action.message,
        total: 0,
      };
    }
    //details
    case type.DETAIL_STUDENT_FETCH: {
      return {
        ...state,
        dataDetails: [],
        loadingDetails: true,
        messageDetails: "",
      };
    }
    case type.DETAIL_STUDENT_FETCH_SUCCEEDED: {
      return {
        ...state,
        dataDetails: action.payload,
        loadingDetails: false,
        messageDetails: "",
      };
    }
    case type.DETAIL_STUDENT_FETCH_FAILED: {
      return {
        ...state,
        dataDetails: [],
        loadingDetails: false,
        messageDetails: action.message,
      };
    }



    //delete
    case type.DELETE_STUDENT: {
      return {
        ...state,
        deleteSucceed:false,
        delMessage:""
      };
    }
    case type.DELETE_STUDENT_SUCCEEDED: {
      return {
        ...state,
        deleteSucceed:true,
        delMessage:"Delete successfully"
      };
    }
    case type.DELETE_STUDENT_FAILED: {
      return {
        ...state,
        deleteSucceed:false,
        delMessage:action.message
      };
    }
    //createstdnt
    case type.CREATE_STUDENT: {
      return {
        ...state,
        createSucceed:false,
        creMessage:""
      };
    }
    case type.CREATE_STUDENT_SUCCEEDED: {
      return {
        ...state,
        createSucceed:true,
        creMessage:"Created successfully!"
      };
    }
    case type.CREATE_STUDENT_FAILED: {
      return {
        ...state,
        createSucceed:false,
        creMessage:action.message
      };
    }
    //update
    case type.UPDATE_STUDENT: {
      return {
        ...state,
        updateSucceed:false,
        updateMessage:""
      };
    }
    case type.UPDATE_STUDENT_SUCCEEDED: {
      return {
        ...state,
        updateSucceed:true,
        updateMessage:"Update successfully!"
      };
    }
    case type.UPDATE_STUDENT_FAILED: {
      return {
        ...state,
        updateSucceed:false,
        updateMessage:action.message
      };
    }

    default: {
      return state;
    }
  }
}
