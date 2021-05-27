import { Route, Switch } from "react-router-dom";
import Exam01UseMemo from "./Exam01UseMemo";
import Exam02UseCallback from "./Exam02UseCallback";
import Exam03SetterFunAvg from "./Exam03SetterFunAvg";
import Exam04ReactMemo from "./Exam04ReactMemo";

// import Exam05ListWithScroll from "./Exam05ListWithScroll";

import loadable from "@loadable/component";

const Exam05ListWithScroll = loadable(() => import("./Exam05ListWithScroll"));

function Ch07PerformanceImprovement(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch07PerformanceImprovement
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component={Exam01UseMemo} /> 
          <Route path={`${props.match.url}/exam02`} exact component={Exam02UseCallback} /> 
          <Route path={`${props.match.url}/exam03`} exact component={Exam03SetterFunAvg} /> 
          <Route path={`${props.match.url}/exam04`} exact component={Exam04ReactMemo} /> 
          <Route path={`${props.match.url}/exam05`} exact component={Exam05ListWithScroll} /> 
        </Switch>
      </div>
    </div>
  );
}

export default Ch07PerformanceImprovement;

/*
사용하고자 하는 js파일만 다운로드하면 되지, 아닌 부분은 다운로드 할 필요 없음.
이로써 얻는 것은? 처음 페이지를 로딩 할 때 빨라진다.
*/