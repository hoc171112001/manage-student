import React from "react";
import {Provider} from 'react-redux'
import jwt from "jsonwebtoken";
import ReactDOM from "react-dom";
//import outta library
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getToken } from "./helper/helper";
import store from './redux/store/store'

let token = getToken(); // get token from local storage
if (token) {
  // console.log(token);
  let decodeData = jwt.decode(token); // decode token dont need to private_key
  console.log(decodeData);
  //token n0t expire do this below:
  try {
    let expTime = decodeData.exp * 1000;
    let now = new Date();
    if (expTime > now) {
      store.dispatch({
        type: "USER_FETCH_SUCCEEDED",
        payload: {
          username: decodeData.username,
          token,
        },
      });
    }
  } catch {
    localStorage.removeItem("token");
  }
}

//test

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
