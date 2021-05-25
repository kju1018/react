import React from "react";

class ClassType extends React.Component {
  // state = {
  //   startNum: 0,
  //   number: 10
  // };
  //이렇게 할수도 있음
  //이렇게 사용하더라도 this를 사용해야함

  constructor(props) {
    super(props);
    this.state = {
      number:0,
      startNum: 0
    };// 이렇게 권장
    //생성자 역할 객체를 만든다. 
    //상태를 정의
    //바인드로 this를 연결

    // this.setState({
    //   ...this.state,
    //   number: props.startNum
    // })
    //이렇게하면 리렌더링 되어도 실행이 안됨
    console.log("constructor() 실행");
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(event){
    this.setState({
      ...this.state,
      number: this.state.number+1
    });

  }

  static getDerivedStateFromProps(props, prevState) {
    //newProps에 constructor(props) {여기 props가 들어옴
    //constructor는 처음에 실행되지만 여기는 props가 바뀔 때 마다 실행됨
    //preState는 getDerivedStateFromProps이것을 실행하기 바로 직전에 상태
    console.info("getDerivedStateFromProps 실행");
    // console.log("props ", props);
    // console.log("prevState ",prevState);
    // console.groupEnd();
    //props가 갱신될 떄 상태값도 같이 갱신되도록 새로운 상태 리턴
    if(prevState.startNum !== props.startNum) {
      return {
        startNum: props.startNum,
        number: props.startNum
      };
    //얘가 리턴하는 것이 새로운 상태가됨
    //그래서 이전 상태랑 비교후 바꿈
    } else {
      return null;
    }
  }//언제 사용하면 좋을지?: 상태업데이트를 해줄때 부모의 상태로 자신의 상태값을 변경해줄때
  //static이기 때문에 this이런거 못쓰고 새로운 상태값을 리턴 시킴
  //부모에서 props를 지정해주면 그 props에 따라 자신의 상태를 변경해주는 역할
  
  //리렌더링 횟수를 줄이겠다

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate 실행");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    console.groupEnd();
    if(nextState.number%2 === 0) {
      return true;
    } else {
      return false;
    }
  }


  render() {
    console.log("render() 실행")
    return (
      <div className="card">
        <div className="card-header">
          ClassType
        </div>
        <div className="card-body">
          <div>number: {this.state.number}</div>
          <button className="btn btn-info btn-sm mt-2" onClick={this.handleIncrement}>증가</button>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() 실행");
  }

  componentDidMount() {
    console.log("componentDidMount 실행")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount 실행");
  }
}

export default ClassType;