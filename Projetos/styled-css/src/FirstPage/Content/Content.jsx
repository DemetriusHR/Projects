import React, { Component } from "react";

import "./Style.scss";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  onClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div
        className={`component dont-select ${this.state.clicked ? "onClicked" : ""}`}
        onClick={this.onClick}
      >
        {this.props.text}
      </div>
    );
  }
}

export default Content;
