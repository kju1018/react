import React from "react";

class ComBClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  addNumber1 = (event) => {
    this.setState({
      number: this.state.number + 1
    });

    this.setState({
      number: this.state.number + 1
    });
    //setState를 두번쓴다고 해도 2번씩 증가하는것이 아님
    //두번 호출 하고 싶을때
  }

  addNumber2 = (event) => {
    //두번 호출 하고 싶을때
    console.log("처음");
    this.setState((prevState) => {
      console.log("첫번째");
      return {
        number: prevState.number + 1
      }
    });
    console.log("사이");
    this.setState((prevState) => {
      console.log("두번째");
      return {
        number: prevState.number + 1
      }
    });
    console.log("마지막");
  }
  //호출은 비동기 실행하는 내용은 동기 콜백함수이기 때문
  //이 함수가 실행이될때 새로운 상태값을 리턴하도록
  //성능향상을 위해 사용
  // 함수를 넘겨주면 순차적으로 실행
  render() {
    return (
      <div class="card">
          <div class="card-header">
            ComBClass
          </div>
          <div class="card-body">
            <h3>{this.state.number}</h3>
            <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber1}>숫자증가</button>
            <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber2}>숫자증가</button>
          </div>
      </div>
    );
  }
}

export default ComBClass;