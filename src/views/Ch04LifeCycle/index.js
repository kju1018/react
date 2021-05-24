import { Route, Switch } from "react-router-dom";
import Exam01CallbackMethod from "./Exam01CallbackMethod";


function ComName(props) {
  return (
    <div className="card">
      <div className="card-header">
        Ch04LifeCycle
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component={Exam01CallbackMethod}/>
        </Switch>
      </div>
    </div>
  );
}

export default ComName;