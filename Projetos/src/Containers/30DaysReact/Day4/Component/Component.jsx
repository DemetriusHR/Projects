import React from "react";
import ComponentWrapper from "./Component.Style";
import Item from "./Item/Item";

class Component extends React.Component {
  render() {
    const { comments } = this.props;

    return (
      <ComponentWrapper>
        <div className="line" />
        {comments.map((comment) => (
          <Item activity={comment} />
        ))}
      </ComponentWrapper>
    );
  }
}

export default Component;
