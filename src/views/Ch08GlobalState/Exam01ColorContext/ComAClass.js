import React from "react";
import ColorContext from "./ColorContext";

class ComAClass extends React.Component {
  //정적 속성
  static contextType = ColorContext;
  //이 클래스에서 쓰는 Context가 뭐냐 뭐다? ColorContext이다
  //클래스 컴포넌트에서 예약되어있는 것 철자 틀리면안됨
  //클래스형은 하나의 컨텍스트만 사용가능함 contextType에 하나만 넣을 수 있기 때문에

  // 생성자
  constructor(props) {
    super(props);
    this.state = {}

  }

  handleChange = (event) => {
    this.context.setColor("red");
  }

  //인스턴스 메소드
  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색상변경</button>
          <div style={{backgroundColor:this.context.color}}>
            내용
          </div>
        </div>
      </div>
    );
  }

}

export default ComAClass;