import { useState } from "react";

function delayPromise(time) {
  //resolve는 성공적으로 싱행됐을때, reject는 실패
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, time);
  });
  return promise
}

function Exam01AsyncControl(props) {
  const [loading, setLoading] = useState(false);

  // const handleRequest = (event) => {
  //   setLoading(true);
  //   delayPromise(3000)
  //   .then(result => {
      
  //   })
  //   .catch(error => {

  //   })
  //   .finally(() => {
  //     setLoading(false);
  //   })
  // }

  const handleRequest = async(event) => {
    setLoading(true);
    try {
      const result = await delayPromise(3000);
      //result에는 success가 저장
      console.log(result);
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        Exam01AsyncControl
      </div>
      <div className="card-body">
        <button className="btn btn-primary btn-sm mr-2" onClick={handleRequest}>데이터 요청</button>
        <div className="mt-3">
          {/* 로딩은 상태 데이터로 해야함 
          로딩중에 리렌더링 됐을때 로딩 정보가 없어지면 안되기때문에*/}
          {loading ? 
            <div class="spinner-border text-info" role="status">
              <span class="sr-only">로딩 중...</span>
            </div>
          : 
            <div>로딩 완료</div>
          }

        </div>
      </div>
    </div>
  );
}

export default Exam01AsyncControl;