import React, { useCallback } from "react";

function BoardListItem(props) {
  console.log("BoardListItem 리렌더링: ",props.board.bno);

  const handleChange = useCallback(() => {
    props.changeBoard(props.board.bno);
  }, [props]); //useCallback을 사용하게 되면 우리가 관심있는 상태가 변경될 때만 재선언
  //props가 변경되면 재선언됨! 아니면 선언되지 않음. 불필요한 재선언 X

  const handleRemove = useCallback(() => {
    props.removeBoard(props.board.bno);
  }, [props]);

  return(
    <div  key={props.board.bno} className="d-flex align-items-center justify-content-between border-bottom">
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

export default React.memo(BoardListItem);