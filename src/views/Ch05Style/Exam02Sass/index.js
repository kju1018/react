import classNames from "classnames/bind";
import { useState } from "react";
import style from "./style.module.scss";
//여기  module이 붙어서 자바스크립트처럼 사용 가능?

const cx = classNames.bind(style);
//style안에 있는 속성을 cx가 사용할 수 있도록 엮어준다.

function Exam02Sass(props) {

  const [state, setState] = useState({
    userId: "user",
  });

  return (
    <div className="card">
      <div className="card-header">
        Exam02Sass
      </div>
      <div className="card-body">
        <div className={style.wrapper}>
          Hello, React1
        </div>

        <div className={style.wrapper + " " + style.inverted + " mt-3"}>
          Hello, React2
        </div>

        <div className={`${style.wrapper} ${style.inverted} mt-3`}>
          Hello, React3
        </div>

        {state.userId === null? 
          <div className={classNames(style.wrapper, style.inverted, "mt-3")}>
            Hello, React4
          </div>
          :
          <div className={classNames(style.wrapper, "mt-3")}>
            Hello, React4
          </div>
        }

        <div className={classNames(style.wrapper, {[style.inverted]: state.userId === null}, "mt-3")}>
          Hello, React5
        </div>

        <div className={cx("wrapper", {inverted: state.userId === null}, "mt-3")}>
          Hello, React6
        </div>

      </div>
    </div>
  );
}

export default Exam02Sass;