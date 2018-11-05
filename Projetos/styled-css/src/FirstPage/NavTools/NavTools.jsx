import React from "react";
import "./NavTools.scss";

class NavTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component1: false,
      component2: false,
      component3: false
    };
  }

  onClickComponent1 = () => {
    this.setState({
      component1: true,
      component2: false,
      component3: false
    });
  };

  onClickComponent2 = () => {
    this.setState({
      component1: false,
      component2: true,
      component3: false
    });
  };

  onClickComponent3 = () => {
    this.setState({
      component1: false,
      component2: false,
      component3: true
    });
  };
  render() {
    return (
      <div className="navtools">
        <div className="navtools-content">
          <div
            className="navtools-component dont-select"
            style={{
              color: `${this.state.component1 ? "#ff2f2fb9" : ""}`,
              borderBottom: `${
                this.state.component1 ? "3px solid #ff2f2f" : ""
              }`
            }}
            onClick={this.onClickComponent1}
          >
            <span
              className="fa fa-signal navtools-icon-first navtools-icons"
              style={{
                color: `${this.state.component1 ? "#ff2f2fe0" : ""}`
              }}
            />{" "}
            Orders
          </div>
          <div
            className="navtools-component dont-select"
            style={{
              color: `${this.state.component2 ? "#ff2f2fb9" : ""}`,
              borderBottom: `${
                this.state.component2 ? "3px solid #ff2f2f" : ""
              }`
            }}
            onClick={this.onClickComponent2}
          >
            <span
              className="fa fa-tag navtools-icon-second navtools-icons"
              style={{
                color: `${this.state.component2 ? "#ff2f2fe0" : ""}`
              }}
            />{" "}
            Products
          </div>
          <div
            className="navtools-component dont-select"
            style={{
              color: `${this.state.component3 ? "#ff2f2fb9" : ""}`,
              borderBottom: `${
                this.state.component3 ? "3px solid #ff2f2f" : ""
              }`
            }}
            onClick={this.onClickComponent3}
          >
            <span
              className="icon-discounts"
              style={{
                color: `${this.state.component3 ? "#ff2f2fe0" : ""}`
              }}
            />{" "}
            Discounts
          </div>
        </div>
      </div>
    );
  }
}
export default NavTools;
