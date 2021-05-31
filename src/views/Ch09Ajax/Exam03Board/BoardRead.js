import { deleteBoard, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BoardRead(props) {
  const bno = parseInt(props.match.params.bno);
  const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
  const pageNo = parseInt(queryString.pageNo);

  //비동기 호출
  // let board = {};
  // const work = async () => {
  //   board = await readBoard(bno);
  // }
  // work();
  //업데이트되는 3가지 조건 props, state, 부모 리렌더링
  //지연이 발생해서 데이터로 ui를 바꾸고 싶다면 상태로 만들어라

  //비동기 호출
  const [board, setBoard] = useState({});

  useEffect(() => {
    const work =  async() => {
      try {
        const response = await readBoard(bno);
        setBoard(response.data);
        //상태변경을 실행하기 때문에
      } catch (error) {
        console.log(error);
      }
    };
    work();
  }, [bno]);
  //useEffect에는 async를 할 수 없음

  //useEffect에서 상태변경을 하게되면 업데이트이기때문에 다시 BoardRead를 실행하는데
  //useEffect에 []를 안써주면 계속 무한 루프
  const handleRemove = async(event) => {
    try {
      await deleteBoard(bno);
      props.history.goBack();
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        {board &&
          <>
            <div>
              <p>bno: {board.bno}</p>
              <p>btitle: {board.btitle}</p>
              <p>bcontent: {board.bcontent}</p>
              <p>bwriter: {board.bwriter}</p>
              <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
              <p>bhitcount: {board.bhitcount}</p>
              <p>battachoname: {board.battachoname}</p>
              <p>battachsname: {board.battachsname}</p>
              <p>battachtype: {board.battachtype}</p>
            </div>
            <div>
              <Link to={"/ch09/exam03?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
              <Link to={`/ch09/exam03/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
              <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default BoardRead;