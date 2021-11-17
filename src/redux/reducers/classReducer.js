import * as type from "../const/const";
let initState = {
  classData: [],
  loadingClass: false,
};
export function classReducer(state = { initState }, action) {
  switch (action.type) {
    case type.FETCH_CLASSES: {
      return {
        ...state,
        classData: [],
        loadingClass: true,
      };
    }
    case type.FETCH_CLASSES_SUCCEEDED: {
      return {
        ...state,
        classData: action.payload.data,
        loadingClass: false,
      };
    }
    case type.FETCH_CLASSES_FAILED: {
      return {
        ...state,
        classData: [],
        loadingClass: false,
      };
    }
    default:
      return state;
  }
}
