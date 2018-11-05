import React from "react";

class Alert extends React.Component {
  componentDidMount() {
    alert(this.props.error);
  }
  render() {
    return <div />;
  }
}
export default Alert;
