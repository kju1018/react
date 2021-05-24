import { useReducer } from "react";
import reducer from "./number-reducer";

// //상태를 변경하는 함수
// function reducer(state, action) {
//   if(action.type === "INCREMENT"){
//     return {
//       // ...state,
//       number: state.number + 1
//     }
//   } else if(action.type === "DECREMENT"){
//     return {
//       // ...state,
//       number: state.number - 1
//     }
//   } else {
//     return null;  
//   }
  
// }


function ComAFun(props) {
  /*
  state: 초기상태
  dispatch: 상태 변경 통보 함수
  */

  const[state, dispatch] = useReducer(reducer, {number : 0});

  //이벤트 처리 함수
  const incrementCounter = (event) => {

    //상태 변경 통보
    dispatch({type: "INCREMENT"});
    
  };

  const decrementCounter = (event) => {
    //상태 변경 통보
    dispatch({type: "DECREMENT"});
  };
  return (
    <div className="card">
      <div className="card-header">
        ComAFun
      </div>
      <div className="card-body">
        <p>현재 카운트 값: {state.number}</p>
        <button className="btn btn-primary btn-sm mr-2" onClick={incrementCounter}>증가</button>
        <button className="btn btn-primary btn-sm" onClick={decrementCounter}>감소</button>
      </div>
    </div>
  );
}

export default ComAFun;