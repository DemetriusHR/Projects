import React, { Component } from 'react';

import HeaderWrapper from './Header.Style';
import ButtonWrapper from '../../Profile/Contents/Buttons/Button.Style';
import { CommentContext } from '../../../Context/comment';

class Header extends Component {
  static contextType = CommentContext;

  state = {
    bottom: false
  };

  onClickTrue = (e) => {
    this.setState(
      {
        bottom: true
      },
      () => this.returnForm(e)
    );
  };

  onClickFalse = (e) => {
    this.setState(
      {
        bottom: false
      },
      () => this.returnForm(e)
    );
  };

  returnForm = (event) => {
    const { bottom } = this.state;
    const { actionsComment } = this.context;

    if (bottom) {
      actionsComment.onClickPublic(event);
    } else {
      actionsComment.onClickCancel(event);
    }
  };

  render() {
    const { actionsComment, comment } = this.context;

    return (
      <HeaderWrapper>
        <form onSubmit={(e) => this.returnForm(e)}>
          <textarea
            placeholder="Comment..."
            value={comment}
            onChange={(e) => actionsComment.onChange(e)}
            cols="30"
            rows="5"
            className="textarea-style scroll-styled"
          />
          <div>
            <ButtonWrapper
              width="100px"
              backgroundHover="green"
              colorHover="white"
              content="00c"
              style={{ padding: '0' }}
            >
              <button
                type="submit"
                className="button button-save effect"
                onClick={(e) => this.onClickTrue(e)}
              >
                <span className="text"> Publicar </span>
              </button>
            </ButtonWrapper>

            <ButtonWrapper
              width="100px"
              backgroundHover="red"
              colorHover="white"
              content="2d3"
              style={{ padding: '0' }}
            >
              <button
                type="submit"
                className="button button-cancel effect"
                onClick={(e) => this.onClickFalse(e)}
              >
                {' Cancelar '}
              </button>
            </ButtonWrapper>
          </div>
        </form>
      </HeaderWrapper>
    );
  }
}

export default Header;
