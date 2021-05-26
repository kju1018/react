import { useCallback } from "react";

function BoardListItem(props) {

  console.log("BoardListItem 리렌더링 : " ,props.board.bno);

  //BoardListItem 함수가 실행될 때 만다 handleChange, gandleRemove가 재선언이 됨
  const handleChange = useCallback(() => {
    props.changeBoard(props.board.bno);
  },[props]);

  // const handleRemove = () => {
  //   props.removeBoard(props.board.bno)
  // };// 이렇게 하면 재 선언 될 때 마다 heap에 새로운 객체가 생성됨

  const handleRemove = useCallback(() => {
    props.removeBoard(props.board.bno)
  },[props]);

  return (
    <div key={props.board.bno} className="d-flex align-items-center justify-content-between border-bottom">
      <div className="d-flex">
        <span style={{width:"80px"}}>{props.board.bno}</span>
        <span>{props.board.btitle}</span>
      </div>
      <div>
        <button className="btn btn-outline-primary btn-sm mr-1" onClick={handleChange}>변경</button>
        <button className="btn btn-outline-danger btn-sm" onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
}

export default BoardListItem;