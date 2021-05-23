function ComBFunTypeEventHandling(props) {
  const handleBtn1 = (event) => {
    console.log("버튼1이 클릭되었습니다.");
    console.log(event.target.name);
    console.log(event.type);
    //타겟, 타입이 중요
  };

  const handleBtn2 = (event, x, y) => {
    const result = x + y;
    console.log("계산 결과: " + result);
    console.log(event.target.name);
    console.log(event.type);
  };


  return (
    <div className="card">
      <div className="card-header">
        ComBFunTypeEventHandling
      </div>
      <div className="card-body">
        <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼1</button>
        <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => { handleBtn2(event, 3, 5) }}>버튼2</button>
        {/* 매개값을 주기위해서는 화살표 함수를 사용해서 호출 코드를 넣음 */}
        {/* 리액트에서는 id를 사용하면 안됨 이유: 리액트도 단일돔  id의 용도는 전체 돔에서 특정 객체를 찾기위해서 주로 사용
        전체 돔에서 id값은 유일해야함 ComA 와 ComB 만드는 사람이 같다면 id가 중복이 안되게 만들면 되지만
        또 다른곳에서 같은 컴포넌트를 사용할경우 동일한 id가 생김*/}
      </div>
    </div>
  );
}

export default ComBFunTypeEventHandling;