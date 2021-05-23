import PropTypes from "prop-types"

function FunTypeProps(props) {
  const {name, version, children} = props;
  console.log(props);
  return (
    <div className="card">
      <div className="card-header">
          FunTypeProps
      </div>
      <div className="card-body">
          <div>name: {name}</div>
          <div>version: {version}</div>
          {children}
      </div>
    </div>
  );
}

FunTypeProps.defaultProps = {
  name:"React",
  version: 13
}

FunTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.number
}

export default FunTypeProps;