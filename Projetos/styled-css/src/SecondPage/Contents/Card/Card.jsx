import React from "react";

import "./Card.scss";

const Card = (props) => (
  <div className="card-content">
    <div className="card-header">
      <span className="fa fa-user icon-user" /> <span className="icon-more" />
    </div>
    <div className="card-bottom">
      <div className="bottom-title">{props.tasks} Tasks</div>
      <div className="bottom-subtitle">Personal</div>
      <div style={{ marginTop: "15px" }}>
        <div className="ant-progress ant-progress-line ant-progress-default">
          <div className="ant-progress-outer">
            <div className="ant-progress-inner">
              <div
                className="ant-progress-bg"
                style={{ width: "83.1111%", height: "6px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <span className="progress-text"> 83% </span>
    </div>
  </div>
);

export default Card;
