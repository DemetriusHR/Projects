import React, { Component } from 'react';

import ContentWrapper from './Content.Style';
import Button from './Button';
import Items from './Items';

class Content extends Component {
  state = {
    visibility: false
  };

  onClickButton = () => {
    const { visibility } = this.state;

    this.setState({
      visibility: !visibility
    });
  };

  render() {
    const { visibility } = this.state;

    return (
      <ContentWrapper className="border">
        <div onClick={() => this.onClickButton()}>
          <Button visibility={visibility} />
        </div>
        <div
          className="items-style scroll-styled"
          style={{
            display: `${visibility ? 'none' : ''}`,
            overflowY: 'scroll'
          }}
        >
          <Items />
        </div>
      </ContentWrapper>
    );
  }
}

export default Content;
