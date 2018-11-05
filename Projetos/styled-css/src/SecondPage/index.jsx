import React, { Component } from "react";

import Contents from "./Contents/Contents";
import "./Initial1.scss";

class SecondPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doolpinder: "none",
      classActive: false
    };
  }

  onClickReturn = () => {
    this.setState({
      classActive: true
    });

    setTimeout(() => {
      this.setState({
        doolpinder: "none",
        classActive: false
      });
    }, 1000);
  };

  render() {
    return (
      <div className="body">
        <div className="header">
          <span className="fa fa-navicon header-navicon" />{" "}
          <span className="fa fa-search header-search" />
          <div className="header-title">todo</div>
        </div>
        <div className="subheader">
          <div className="subheader-first">
            <img
              src="data:image/jpeg;base64,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"
              alt="profile"
              className="subheader-img"
            />
          </div>
          <div
            className="subheader-title"
            onClick={() => this.setState({ doolpinder: "block" })}
          >
            Hello, Jane
          </div>
          <div className="subheader-subtitle">
            Looks like feel good. <br />
            You have 3 tasks to today.
          </div>
        </div>

        <Contents />

        <div
          className={`todos ${
            this.state.classActive ? "todos-visibility" : ""
          }`}
          style={{ display: `${this.state.doolpinder}` }}
        >
          <div className="todos-header">
            <div
              className="fa fa-arrow-left todos-icon-return"
              onClick={() => this.onClickReturn()}
            />
            <div className="fa fa-ellipsis-v todos-icon-more" />
          </div>
          <div className="todos-subheader">
            <span
              className="fa fa-briefcase icon-user"
              style={{ padding: "12px 13px" }}
            />
            <div className="todos-subheader-text">
              <span className="todos-subtitle">12 Tasks</span> <br />
              <span className="todos-title">Work</span>
            </div>
            <div style={{ marginTop: "15px" }}>
              <div className="ant-progress ant-progress-line ant-progress-default">
                <div className="ant-progress-outer">
                  <div className="ant-progress-inner">
                    <div
                      className="ant-progress-bg"
                      style={{ width: "25.1111%", height: "4px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="progress-text" style={{ marginTop: "-19px" }}>
              {" "}
              25%{" "}
            </span>
          </div>

          <div className="todos-context">
            <div className="todos-context_title">Today</div>
            <div className="todos-context_task">
              <label className="todos-container">
                Meet Clients
                <input type="checkbox" />
                <span className="todos-checkmark" />
              </label>
            </div>
            <div className="todos-context_task">
              <label className="todos-container">
                Development
                <input type="checkbox" />
                <span className="todos-checkmark" />
              </label>
            </div>
            <div className="todos-context_task">
              <label className="todos-container">
                Icon Set
                <input type="checkbox" />
                <span className="todos-checkmark" />
              </label>
            </div>
            <div className="todos-context_task">
              <label className="todos-container">
                HTML/CSS Study
                <input type="checkbox" />
                <span className="todos-checkmark" />
              </label>
            </div>
          </div>
          <div className="todos-context">
            <div className="todos-context_title">Tomorrow</div>
            <div className="todos-context_task">
              <label className="todos-container">
                Weekly Report
                <input type="checkbox" />
                <span className="todos-checkmark" />
              </label>
            </div>
            <div className="todos-context_task">
              <label className="todos-container">
                Design Meeting
                <input type="checkbox" />
                <span className="todos-checkmark" />
              </label>
            </div>
            <div className="todos-context_task">
              <label className="todos-container">
                Quick Prototyping
                <input type="checkbox" />
                <span className="todos-checkmark" />
              </label>
            </div>
            <div className="todos-context_task">
              <label className="todos-container">
                GIT Study
                <input type="checkbox" />
                <span className="todos-checkmark" />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;
