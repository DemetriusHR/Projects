import React, { Component } from "react";

import { dateNow } from "../Functions/DateNow";
import Card from "./Card/Card";
import "./Contents.scss";

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: 0
    };
  }

  onChangeUp = event => {
    const left = event.pageY;
    const top = event.pageX;

    console.log(left + " " + top);

    this.setState({
      margin:
        this.state.margin === 0
          ? this.state.margin - 214
          : this.state.margin - 250
    });

    console.log(this.state.margin + " ");
  };

  onChangeDown = (event) => {
    const left = event.pageY;
    const top = event.pageX;

    console.log(left + " " + top);
    this.setState({
      margin: this.state.margin <= -214 ? this.state.margin + 250 : 0
    });

    console.log(this.state.margin);
  };

  render() {
    return (
      <div className="content">
        <div className="content-title"> Today | {dateNow()}</div>
        <div
          className="cards-line"
          onPointerMoveCapture={event =>
            event.clientX.toExponential(1) > 200 && this.state.margin > -714
              ? this.onChangeUp(event)
              : this.onChangeDown(event)
          }
          style={{ marginLeft: `${this.state.margin}px` }}
        >
          <Card tasks={"1"} />
          <Card tasks={"2"} />
          <Card tasks={"3"} />
          <Card tasks={"4"} />
        </div>
      </div>
    );
  }
}

export default Contents;
