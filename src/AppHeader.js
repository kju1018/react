import { removeAuthHeader } from "apis/axiosConfig";
import AppContext from "AppContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";

function AppHeader() {
  //Context를 이용할 경우
  const appContext = useContext(AppContext);

  const globalUid = useSelector((state) => {return state.authReducer.uid});
  const dispatch = useDispatch();

  const logout = (event) => {
    //Context이용
    appContext.setUid("");

    //Redux를 이용
    dispatch(createSetUidAction(""));
    dispatch(createSetAuthTokenAction(""));
    removeAuthHeader();

    //SessionStorage에 인증 내용 제거
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("authToken");    
  }

  return (
    <nav className="navbar bg-dark navbar-dark text-white font-weight-bold 
                justify-content-between">
      <Link to="/" className="navbar-brand">
        <img src="/logo512.png" alt="" width="30" height="30" className="align-top"/>
        {" "} React
        {/* {}안에 자바스크립트가 들어간다 */}
      </Link>
      <div>
        {appContext.uid ==="" && globalUid === ""?
          <Link to="/ch09/exam02" className="btn btn-success btn-sm">로그인</Link>
          :
          <div className="d-flex align-items-center">
            <span className="mr-2">User ID: {appContext.uid || globalUid}</span>
            <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
          </div>
        }
       
      </div>
    </nav>        
  )
}

export default AppHeader;