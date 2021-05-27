import React from "react";
import { connect } from "react-redux";
import { createSetUidAction } from "redux/auth-reducer";

class LoginFormClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      uid:""
    };

    // this.test = {
    //   test: ""
    // };
  }
  
  // test(state) {
  //   this.setTest({test: state.authReducer.uid});
  //   console.log(this.test);
  // };

  handleChange = (event) => {
    this.setState({uid:event.target.value});
  }

  login = (event) => {
    this.props.setUid(this.state.uid);
  }

  logout = (event) => {
    this.props.setUid("");
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          LoginFormClass
        </div>
        <div className="card-body">
          <div className="form-group row">
            <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="uid" name="uid" value={this.state.uid} onChange={this.handleChange}/>
            </div>
          </div>
          {this.props.uid === "" ? (
            <button className="btn btn-success btn-sm" onClick={this.login}>로그인</button>
          ) : ( 
            <button className="btn btn-success btn-sm" onClick={this.logout}>로그아웃</button>
          )}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    uid: state.authReducer.uid
  }//여기 authReducer root-reducer에서 추가한 이름을 사용하면 됨
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUid: (uid) => dispatch(createSetUidAction(uid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormClass);