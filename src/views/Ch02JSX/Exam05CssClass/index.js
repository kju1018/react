import "./style.css"

  //일반 자바스크립트 주석
  /*
    여러행에 걸쳐 주석 내용을 작성할 때
  */

function Exam05CssClass(props) {
  const name = "react";
  return (
    <div className="card">
      {/* 헤더 내용 */}
      <div className="card-header" // 부트스트랩 내용
      >
        Exam05CssClass
      </div>
      <div className="card-body">
        <div className="react">{name}</div>
      </div>
    </div>
  );
}

export default Exam05CssClass;