import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

function addAuthHeader(authToken) {
  axios.defaults.headers.common["authToken"] = authToken;
}

function removeAuthHeader() {
  delete axios.defaults.headers.common["authToken"];
}

/*설정파일 작성하고 여기다가 axios에 대한 기본 설정을 해줌!!
Axios.default.baseURL: 공통경로
addAuthHeader : 로그인 되었을 때 authToekn이 기본적으로 추가해서 보내도록! 
removeAuthHeader: 로그아웃 하면 더 이상 authToken을 보내면 안되니까 빼버림!*/