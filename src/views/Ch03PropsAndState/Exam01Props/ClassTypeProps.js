import React from "react";
import PropTypes from "prop-types"

class ClassTypeProps extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    // console.log(props.match);
    //마지막 컴포넌트에서는 match 정보가 안나오지만 스위치 안에있는 컴포넌트는 나옴
  }
  render() {
    const {name, version, children} = this.props;
    return (
      <div class="card">
          <div class="card-header">
            ClassTypeProps
          </div>
          <div class="card-body">
            <div>name: {name}</div>
            <div>version: {version}</div>
            {children}
          </div>
      </div>
    );
  }
}

//디폴트 속성값 설정
ClassTypeProps.defaultProps = {
  name:"React",
  version: 17
}

ClassTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number
};

export default ClassTypeProps