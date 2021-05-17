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
        <h6 className="text-white">Ch01ComponentDeclaration</h6>
        <Link to="/ch01/coma" className="nav-link text-warning">ComA 함수형 컴포넌트</Link>
        <Link to="/ch01/comb" className="nav-link text-warning">ComB 클래스형 컴포넌트</Link>
        {/* Link는 이걸 클릭하면 이동한다 라는 뜻 */}
      </li>
    </ul>
    );
}

export default AppMenu;