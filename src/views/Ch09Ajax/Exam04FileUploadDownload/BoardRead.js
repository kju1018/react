import { deleteBoard, downloadAttach, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
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
        //상태변경을 실행하기 때무에
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

  //방법1
  const [imgSrc, setImgSrc] = useState(null);//이미지 데이터는 없으면 걍 null
  const imgTag = useRef();
  useEffect(() => {
    if(board.battachoname) {
      const work =  async() => {
        try {
          const response = await downloadAttach(board.bno);
          setImgSrc(URL.createObjectURL(response.data));
          //response.data에 있는 이미지를 url object로 만들어서 setter의 매개값으로 전달하기 (이미지 데이터의 경우)

          // imgTag.current.src = URL.createObjectURL(response.data);
          //URL Object로 해야함
        } catch (error) {
          console.log(error);
        }
      };
      work();
    }
  }, [board]);//board를 불러와서 board가 바뀌면 이 useEffect가 실행

  //방법2
  const authToken = useSelector(state => state.authReducer.authToken);

  
  return (
    <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        {board &&
        <>
          <div className="row">
            <div className="col-md-6">
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

            <div className="col-md-6">
              {board.battachoname && 
                <div>
                  {/* 방법 1 */}
                  <img src={imgSrc} alt="" width="200" ref={imgTag}/>
                  <hr/>
                  {/* 방법 2 */}
                  <img src={`http://localhost:8080/boards/battach/${board.bno}?authToken=${authToken}`} alt="" width="200"/>
                  {/* 이건 axios가 아니라 브라우저에 의해 url로 가서 이미지를 다운로드 한것 
                  하지만 헤더에 authToken을 넘길수없으니까 주소로 넘겨줌 */}
                </div>
              }
            </div>
          </div>
          <div>
            <Link to={"/ch09/exam04?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
            <Link to={`/ch09/exam04/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
          </div>
        </>
        }
      </div>
    </div>
  );
}

export default BoardRead;