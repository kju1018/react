import { useDispatch, useSelector } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

function ComBFun() {
  const color = useSelector((state) => {
    return state.colorReducer.color
  })

  const dispatch = useDispatch();

  const handleChange = (event) => {
    // dispatch({type:"color/setColor", color:"grees"});//이거랑 같음
    dispatch(createSetColorAction("green"));
  }

  return (
    <div className="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
        <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색상변경</button>
        <div style={{backgroundColor:color}}>
          내용
        </div>
      </div>
    </div>
  );
}

export default ComBFun;