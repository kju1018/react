import { Redirect, Route, Switch } from "react-router-dom";
import Home from "views/Home";
import Ch01ComponentDeclaration from "views/Ch01ComponentDeclaration"
import Ch02JSX from "views/Ch02JSX";
//jsconfig로 하면 src가 기본 경로로 되어있음

function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ch01" component={Ch01ComponentDeclaration} />
      <Route path="/ch02" component={Ch02JSX} />
      <Redirect to="/" />
      {/* 어느 누구도 해당하지 않으면 home으로 감  */}
    </Switch>
  );
}

export default AppRoute;
