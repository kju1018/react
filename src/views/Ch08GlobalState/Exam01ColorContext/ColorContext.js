import React, { useState } from "react";

const ColorContext = React.createContext({
  color: "yellow",
  setColor: function(color) {this.color = color}
});//얘는 컴포넌트가 아님
//  setColor: () => {} 이렇게만해도 충분함 얘가 함수라는것을 표시만 해도됨
//프로바이더가 제공되지 않았을때 사용할 기본값
//함수를 작성해도 어차피 실행안됨?
//setColor는 color값을 바꾸기위해서 작성하는것이 아님  setColor는 함수다 라고 표시만 함
//만약 setColor: ""면 코드상 사용 불가능
export function ColorContextProvider(props) {
  const [color, setColor] = useState("yellow");
  const value = {
    color: color,
    setColor: setColor
  };

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}//얘는 컴포넌트 컴포넌트는 리턴값이 있어야함

export default ColorContext;