import { Link } from "react-router-dom";

function AppMenu() {
    return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <h6 className="text-white">React Home</h6>
        <Link to="/" className="nav-link text-warning">Home</Link>
        {/* Link는 이걸 클릭하면 이동한다 라는 뜻 */}
      </li>

      <li className="nav-item">
        <h6 className="text-white">Ch01. ComponentDeclaration</h6>
        <Link to="/ch01/coma" className="nav-link text-warning">ComA 함수형 컴포넌트</Link>
        <Link to="/ch01/comb" className="nav-link text-warning">ComB 클래스형 컴포넌트</Link>
        {/* Link는 이걸 클릭하면 이동한다 라는 뜻 */}
      </li>

      <li className="nav-item">
        <h6 className="text-white">Ch02. JSX</h6>
        <Link to="/ch02/exam01" className="nav-link text-warning">Exam01WrapElement</Link>
        <Link to="/ch02/exam02" className="nav-link text-warning">Exam02Expressions</Link>
        <Link to="/ch02/exam03" className="nav-link text-warning">Exam03Condition</Link>
        <Link to="/ch02/exam04" className="nav-link text-warning">Exam04InlineCss</Link>
        <Link to="/ch02/exam05" className="nav-link text-warning">Exam05CssClass</Link>
        <Link to="/ch02/exam06" className="nav-link text-warning">Exam06EventHandling</Link>
        <Link to="/ch02/exam07" className="nav-link text-warning">Exam07Repeat</Link>
        <Link to="/ch02/exam08" className="nav-link text-warning">Exam08Ref</Link>
      </li>
    </ul>
    );
}

export default AppMenu;