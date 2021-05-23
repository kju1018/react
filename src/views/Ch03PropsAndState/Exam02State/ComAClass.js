import React from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random()*parseInt("ffffff",16)).toString(16);
}

class ComAClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      color: "black"
    }
    this.addNumber = this.addNumber.bind(this);
    //어디서든 호출되든 상관없이 이 함수 안에 this는 나와 연관시켜달라
  }

  addNumber(event) {
    // this.state.number = this.state.number + 1;
    // console.log("addNumber() 실행" + this.state.number);
    
    this.setState({
      ...this.state,
      number: this.state.number + 1,
      color: "black"
    })
    //여기서는 새로운 상태 테이터를 만들어줌
    //이 새로운 상태데이터와 위에 이전 상태데이터를 비교해서 변경되어있으면 render 실행
    //비동기 작업이 끝나야 render 실행
  }

  changeColor = (evnet) => {
    this.setState({
      ...this.state,
      //바뀌지 않는 데이터는 ...this.state로 적용
      color:getRandomColor()
    })
  };
  //여기만 ; 들어가는경우 changeColor은 필드처럼 선언한것이기 때문에 필요
  //addNumber는 메소드처럼 선언한것이기 때문에 ;이 필요없음

  render() {
    return(
      <div class="card">
          <div class="card-header">
            ComAClass
          </div>
          <div class="card-body">
            <h3 style={{color:this.state.color}}>{this.state.number}</h3>
            <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber}>숫자증가</button>
            <button className="btn btn-info btn-sm mr-2" onClick={this.changeColor}>색깔 변경</button>
          </div>
      </div>
    );
  }
}

export default ComAClass;