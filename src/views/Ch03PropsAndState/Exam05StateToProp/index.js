import { useState } from "react";
import Child from "./Child";

function Exam05StateToProp() {

  const [img, setImg] = useState("photo1.jpg");

  const changeImg = () => {
    if(img ==="photo1.jpg"){
      setImg("photo2.jpg");
    } else {
      setImg("photo1.jpg");
    }
  }
  //부모 상태가 변경 -> 리렌더링 -> props가 바뀜 -> 자식도 리렌더링


  return (
    <div className="card">
      <div className="card-header">
        Exam05StateToProp
      </div>
      <div className="card-body">
        <Child img={img} changeImg={changeImg}/>
        <Child img={img} changeImg={changeImg}/>
      </div>
    </div>
  );
}

export default Exam05StateToProp;