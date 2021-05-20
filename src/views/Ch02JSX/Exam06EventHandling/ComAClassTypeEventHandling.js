import React from "react";

class ComAClassTypeEventHandling extends React.Component {

  constructor(props) {
    super(props);

    //방법1
    this.handleBtn1 = this.handleBtn1.bind(this);
    this.handleBtn2 = this.handleBtn2.bind(this);
    //이 메소드가 어디서 호출되던지 상관없이 여기 this는 나라고 생각해야해( this를 나랑 연결 )
    //이 메소드안에 this는 나야
    //이게 없을때 this는 window를 의미함
  }

  method1() {
    console.log("method1() 실행");
  }

  handleBtn1(event) {
    console.log("버튼1이 클릭되었습니다.");
    console.log(event.target.name);
    console.log(event.type);
    //타겟, 타입이 중요
    this.method1();
  }//메소드로 작성할때 안에서 this를 사용해서 다른 멤머 메소드를 사용하고 싶을때는 바인드를 해줘야함

  handleBtn2(event, x, y) {
    const result = x + y;
    console.log("계산 결과: " + result);
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  };

  //방법2
  handleBtn3 = (event) => {
    console.log("버튼3이 클릭되었습니다.");
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  };//화살표 함수로 작성할때 this는 자신의 객체를 참조 가리킨다
  //자신을 맵핑하고 있는 객체를 참조

  handleBtn4 = (event, x, y) => {
    console.log("버튼4이 클릭되었습니다.");
    console.log(event.target.name);
    console.log(event.type);
    this.method1();
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComAClassTypeEventHandling 
        </div>
        <div className="card-body">
          <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼1</button>
          <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event) => { this.handleBtn2(event, 3, 5) }}>버튼2</button>

          <button name="btn3" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn3}>버튼3</button>
          <button name="btn4" className="btn btn-info btn-sm mr-2" onClick={(event) => { this.handleBtn4(event, 3, 5) }}>버튼4</button>
        </div>
      </div>
    );
  }
}

export default ComAClassTypeEventHandling ;