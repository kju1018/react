import { useEffect, useState } from "react";

function FunType(props) {
  console.log("FunType() 실행");

  const [state, setState] = useState({
    startNum: 0,
    number: 0
  });

  // setState({
  //   startNum: props.startNum,
  //   number: props.startNum
  // }); 이러면 무한 루프

  useEffect(() => {
    // setState({
    //   startNum: props.startNum,
    //   number: props.startNum
    // });
    console.log("마운트, 업데이트 후에 실행");
    return (() => {
      console.log("업데이트전, 언마운트시 실행");
    });
  });

  useEffect(() => {
    console.log("마운트 실행");
    return(() => {
      console.log("언마운트시 실행");
    })
  }, []);

  useEffect(() => {
    console.log("마운트/props 변경 실행");
    return(() => {
      console.log("언마운트시 실행");
    })
  }, [props]);

  useEffect(() => {
    console.log("마운트/props/state 변경 실행");
    return(() => {
      console.log("언마운트시 실행");
    })
  }, [props, state]);


  const handleIncrement = (event) => {
    setState({
      ...state,
      number: state.number + 1
    })
  }

  return (
    <div className="card">
      <div className="card-header">
        FunType
      </div>
      <div className="card-body">
        <div>number: {state.number}</div>
        <button className="btn btn-info btn-sm mt-2" onClick={handleIncrement}>증가</button>
      </div>
    </div>  
  );
}

export default FunType;