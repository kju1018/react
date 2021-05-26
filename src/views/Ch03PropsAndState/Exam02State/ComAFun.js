import { useState } from "react";


function getRandomColor() {
  return "#" + Math.floor(Math.random()*parseInt("ffffff",16)).toString(16);
}


function ComAFun(props) {
  let name = "홍길동";

  const [state, setState] = useState({
    number: 0,
    color: "black"
  });
  const addNumber = (event) => {
    setState({
      ...state,
      number: state.number + 1
    });
    name = "리액트";
    //컴포넌트에 가 바뀌게되면 함수형은 다시 실행됨 그래서 여기에서 "리액트"라고 바꾸어도 소용이 없음
  };
  //상태로 안하고 
  const changeColor = (event) => {
    setState({
      ...state,
      color: getRandomColor()
    })
  };

  console.log("ComAFun 실행");

  return (//아쉬웠던점, 데이터 3법?
    <div class="card">
        <div class="card-header">
          ComAFun
        </div>
        <div class="card-body">
          name: {name}
          <h3 style={{color:state.color}}>{state.number}</h3>
          <button className="btn btn-info btn-sm mr-2" onClick={addNumber}>숫자증가</button>
          <button className="btn btn-info btn-sm mr-2" onClick={changeColor}>색깔 변경</button>
        </div>
    </div>
  );
}

export default ComAFun;