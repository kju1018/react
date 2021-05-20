import React from "react";
import { createRef } from "react";

class ComC extends React.Component {
  
  constructor(prop) {
    super(prop);
    this.outterDiv = createRef();
    this.handleBtn = this.handleBtn.bind(this);
  }

  handleBtn(event) {
    //내용물의 높이
    const scrollHeight = this.outterDiv.current.scrollHeight;
    
    //컨테이너의 높이
    const clientHeight = this.outterDiv.current.clientHeight;

    //스크롤의 위치 설정
    this.outterDiv.current.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const outerStyle = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative"
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)"
    };

    return( 
      <div className="card">
        <div className="card-header">
            ComC
        </div>
        <div className="card-body">
            <div style={outerStyle} ref={this.outterDiv}>
              <div style={innerStyle}></div>
            </div>
            <button className="btn btn-info btn-sm mt-3" onClick={this.handleBtn}>스크롤 이동</button>

        </div>
      </div>
    );
  }
}

export default ComC;