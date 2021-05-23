import { useState } from "react";

function ComBFun(props) {

  const [number, setNumber] = useState(0);
  //함수타입은 꼭 객체가 아니여도 괜찮음
  //하지만 클래스 타입은 꼭 객체여야함

  const addNumber1 = (event) => {
    setNumber(number + 1);
    setNumber(number + 1);
  }

  const addNumber2 = (event) => {
    //두번 호출 하고 싶을때
    setNumber(prevNumber =>{
      return prevNumber + 1;
    });
    setNumber(prevNumber =>{
      return prevNumber + 1;
    });
  }
  return (
    <div className="card">
      <div className="card-header">
          ComBFun
      </div>
      <div className="card-body">
          <h3>{number}</h3>
          <button className="btn btn-info btn-sm mr-2" onClick={addNumber1}>숫자증가</button>
          <button className="btn btn-info btn-sm mr-2" onClick={addNumber2}>숫자증가</button>
      </div>
    </div>
  );
}
export default ComBFun;