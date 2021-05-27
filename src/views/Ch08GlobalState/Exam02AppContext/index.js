import LoginFormFun from "./LoginFormFun";
import LoginFormClass from "./LoginFormClass";

function Exam02AppContext() {
  return (
    <div className="card">
      <div className="card-header">
        Exam02AppContext
      </div>
      <div className="card-body">
        <LoginFormClass/>
        <LoginFormFun/>
      </div>
    </div>
  );
}

export default Exam02AppContext;