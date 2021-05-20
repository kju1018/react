function fun() {
  return "동작";
}//이건 컴포넌트가 아님 그냥 함수

function Exam02Expressions() {
  const name = "리액트";

  return (
    <div className="card">
      <div className="card-header">
      Exam02Expressions
      </div>
      <div className="card-body">
          <p>Hello, {name}!</p>
          <p>{name}, {fun()}</p>
          <p>{2+3}</p>
      </div>   
    </div>
  );
}

export default Exam02Expressions;