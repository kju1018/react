import axios from "axios";
import qs from "qs";

export function getBoardList(pageNo = 1) {
  const promise = axios.get("/boards", {params: {pageNo: pageNo}});
  //config작성을 위한 {}
  return promise;
}

export function createBoardNoAttach(board) {
  const promise = axios.post("/boards", board); // json방식 {btitle:"제목1", bcontent:"내용1"...} 
  //{}에 {btitle:"제목1", bcontent:"내용1"...} 이렇게 넣어버리면
  //내용이 그래도 실려서 넘어감
  //받을때 서버에서 requestBody를 써야함
  //{btitle:"제목1", bcontent:"내용1"...}(json방식) 이게 아니라 btitle=xxx&bcontent=xxx 이건 queryString

  //노드는 둘 다 똑같이 해석을 함
// app.use(express.urlencoded({extended:true})); //param1=value1&param2=value2
// app.use(express.json()); //{"param1":"value1", "param2":"value2"} 사용
  
  // const promise = axios.post("/boards", qs.stringify(board));//board를 문자열로 변환시킴 btitle=제목1&bcontent=내용1
}


export function createBoard(multipartFormData) {
  return axios.post("/boards", multipartFormData); 
}

export function readBoard(bno) {
  return axios.get("/boards/" + bno);
}

export function deleteBoard(bno) {
  return axios.delete("/boards/" + bno);
}

export function updateBoard(board) {
  return axios.put("/boards", board); //{"btitle":"xxx", "bcontent":"yyy", "bwriter":"zzz"}
}

export function downloadAttach(bno) {
  return axios.get("/boards/battach/" + bno, {responseType: "blob"});
  //axios가 이렇게 지정을하면 파싱을함
  //이렇게 지정안하면 문자인줄알고 파싱하는데 지정하면 파싱안하고 그대로 전달
  //생략되면 json타입이면 자바스크립트 타입으로 자동으로 만들어줌
  //이걸 지정해주면 데이터를 가공하지 않고 response에 심어서 전달?
  //이미지 타입을 받을때는 responseType을 명시해야함
}