import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "AppContext";
import { createStore } from "redux";
import rootReducer from "redux/root-reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addAuthHeader } from "apis/axiosConfig";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";

const store = createStore(rootReducer, composeWithDevTools());

//Redux에 인증 정보 설정
store.dispatch(createSetUidAction(sessionStorage.getItem("uid") || ""));
store.dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));

//Axios에 인증 헤더 추가
if(sessionStorage.getItem("authToken")){
  addAuthHeader(sessionStorage.getItem("authToken"));
}
//여기 index.js는 새로고침 할 때 마다 실행이 됨
ReactDOM.render(
  // es6문법?
  // <React.StrictMode>
    <BrowserRouter>
    {/* store는 개별 리듀스가 관리하는 상태들을 총괄해서 관리하는 객체가 store  */}
      <Provider store={store}>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Provider>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root"),
);

  //StrictMode: ES6 문법으로 잘 작성되었는지 엄격하게 검사하겠다. 개발모드에서만 동작

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
