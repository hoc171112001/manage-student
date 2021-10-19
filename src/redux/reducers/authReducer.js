import * as type from '../const/const'
let initState = {
  isLogged: false,
  isSubmit: false,
  username: "",
  token: "",
  message: "",
};

export function authReducer(state = { initState }, action) {
  switch (action.type) {
    case type.USER_LOGIN: {
      return {
        isLogged: false,
        isSubmit: true,
        username: "",
        token: "",
        message: "",
      };
    }
    case type.USER_FETCH_SUCCEEDED: {
      return {
        isLogged: true,
        isSubmit: false,
        username: action.payload.username,
        token: action.payload.token,
        message: "",
      };
    }
    case type.USER_FETCH_FAILED: {
      return {
        isLogged: false,
        isSubmit: false,
        username: "",
        token: "",
        message: action.message,
      };
    }
    default: {
      return state;
    }
  }
}
