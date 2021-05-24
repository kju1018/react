import { useState } from "react";

function getBoardList() {
  console.log("ㅇ아ㄹㅇ너");
    return ([
    {bno: 1, btitle:"제목1", bcontent:"내용1"},
    {bno: 2, btitle:"제목2", bcontent:"내용2"},
    {bno: 3, btitle:"제목3", bcontent:"내용3"}
  ]);
}

function Exam04StateInitFun() {

  // const [boardList, setBoardList]=useState(getBoardList());//리런더링할 때마다 호출
  //Exam04StateInitFun 얘가 새로 렌더링되면 getBoardList함수가 실행됨 하지만 useState가 막음?

  const [boardList, setBoardList]=useState(getBoardList);// 최초 렌더링시 딱 한번 호출
  //함수호출말고 함수자체를 제공해야 한다
  /*
  어떤 상태의 초기값을 제공할 때 네트워크에서 받아서 해야한다면 네트워크 처리 코드를 넣을 수 있음. 
  근데 이건 처음 한 번만 실행되어야 하지, 컴포넌트가 리랜더링 될 때 마다 다시 실행한다면 성능에 문제 생김. 
  그래서 상태의 초기값으로 함수호출말고 함수자체를 제공해야 한다!
  */ 
  const [newBno, setNewBno] = useState(4);

  const addBoard = (event) =>{
    setBoardList(boardList.concat({
      bno: newBno,
      btitle: "제목4",
      bcontent: "내용4"
    }));
    setNewBno(newBno + 1);
  };
  
  return (
    <div className="card">
      <div className="card-header">
        ComAUseStateInitFun
      </div>
      <div className="card-body">
        <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th>bno</th>
              <th>btitle</th>
              <th>bcontnet</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map(board=>(
              <tr className="text-center" key={board.bno}>
                <th>{board.bno}</th>
                <td>{board.btitle}</td>
                <td>{board.bcontent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Exam04StateInitFun;