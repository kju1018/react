import { useReducer, useState } from "react";

function reducer(prevBoards, action) {

  if(action.type === "ADD"){ //{type: "ADD", board:{bno:xx, btitle:xxx, bcontent:xx}}
    const newBoards = prevBoards.concat(action.board);
    return newBoards;//boards가 배열이니까 배열을 리턴해야함
    //상태는 직접 다뤄서는 안된다.
  } else if(action.type === "DELETE") { //{type: "DELETE", bno:1}
    console.log("sdfsdf");
    const newBoards = prevBoards.filter((board) => {
      return board.bno !== action.bno//board.bno랑 action.bno랑 다른가?
    });
    return newBoards;
  } else if(action.type === "UPDATE") { //{type: "UPDATE", board:{bno:xx, btitle:xxx, bcontent:xx}}
    const newBoards = prevBoards.map(board => {
      if(board.bno === action.board.bno){
        // board.btitle = action.board.btitle 이건 안됨 직접적으로 바꿔주는것이기 때문
        return action.board;
        //새로운 객체를 리턴해줘야함
      } else {
        return board;
      }
    });
    return newBoards;
  } else {
  }
  return null;
}

function ComBFun(props) {

  console.log("ComBFun() 실행");

  const [boards, dispatch] = useReducer(reducer, [
    {bno: 1, btitle:"제목1", bcontent:"내용1"},
    {bno: 2, btitle:"제목2", bcontent:"내용2"},
    {bno: 3, btitle:"제목3", bcontent:"내용3"}
  ]);//초기값: ui가 만들어질때 최초로 한번만 실행
  //상태가 변경되어서   console.log("ComBFun() 실행");가 계속 실행되어도 초기값은 한번만 실행
  const [newBno, setNewBno] = useState(4);
  const [newBoard, setNewBoard] = useState({
    btitle:"",
    bcontent:""
  });

  const [updateBoard, setUpdateBoard] = useState({
    bno:"",
    btitle:"",
    bcontent:""
  });

  const changeNewBoard = (event) => {
    setNewBoard({
      ...newBoard,
      [event.target.name]:event.target.value
    });
  }// 바인딩 처리

  const changeUpdateBoard = (event) => {
    setUpdateBoard({
      ...updateBoard,
      [event.target.name]:event.target.value
    });
  } // 바인딩 처리

  const addBoard = (event) => {
    const board = {...newBoard, bno:newBno};
    dispatch({type:"ADD", board});
    setNewBno(newBno + 1);
    setNewBoard({
      btitle:"",
      bcontent:""
    });
  };
  
  const removeBoard = (bno) => {
    console.log(bno);
    dispatch({type:"DELETE", bno});
  }

  const selectBoard = (bno) => {
    const selectedBoard = boards.find(board => {
      return board.bno === bno;//이게 true인것을 리턴
    });
    // setUpdateBoard(selectBoard); 이렇게하면 객체를 공유하는것
    setUpdateBoard({...selectedBoard}); // 이렇게하면 복제하는것
  }

  const handleUpdate = () => {
    const board = {...updateBoard};
    dispatch({type:"UPDATE", board});
    setUpdateBoard({
      bno:"",
      btitle:"",
      bcontent:""
    })
  }

  return (
    <div className="card">
      <div className="card-header">
        ComBFun
      </div>
      <div className="card-body">
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={newBoard.btitle} onChange={changeNewBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={newBoard.bcontent} onChange={changeNewBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={(addBoard)}>추가</button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>bno</th>
                <th>btitle</th>
                <th>bcontent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {boards.map(board => {
                return (
                  <tr>
                    <td>{board.bno}</td>
                    <td>{board.btitle}</td>
                    <td>{board.bcontent}</td>
                    <td style={{width:"150px"}}>
                      <button className="btn btn-info btn-sm mr-1" onClick={() => {selectBoard(board.bno)}}>선택</button>
                      <button className="btn btn-danger btn-sm" onClick={() => {removeBoard(board.bno)}}>삭제</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="alert alert-primary">
          <table style={{width:"100%"}}>
            <tbody>
              <tr>
                <td style={{width:"100px"}}>bno</td>
                <td><input type="text" name="bno" style={{width:"100%"}} value={updateBoard.bno} readOnly/></td>
              </tr>          
              <tr>
                <td style={{width:"100px"}}>btitle</td>
                <td><input type="text" name="btitle" style={{width:"100%"}} value={updateBoard.btitle} onChange={changeUpdateBoard}/></td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td><input type="text" name="bcontent" style={{width:"100%"}} value={updateBoard.bcontent} onChange={changeUpdateBoard}/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={handleUpdate}>수정</button>
        </div>      
      </div>
    </div>
  );
}

export default ComBFun;