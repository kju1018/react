import { useContext } from "react";
import ColorContext from "./ColorContext";

function ComBFun(props) {
  const colorContext = useContext(ColorContext);
  //함수형 컴포넌트는 다른 컨텍스트도 사용 가능함

  const handleChange = (event) => {
    colorContext.setColor("green");
  };

  return (
    <div CmBFun="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
        <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색상변경</button>
        <div style={{backgroundColor:colorContext.color}}>
          내용
        </div>
      </div>
    </div>
  );
};

export default ComBFun;