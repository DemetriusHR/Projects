import React from 'react';

import BarDownCommentWrapper from './BarDownComment.Style';
import BarCommentsModalWrapper from '../../BarComments/BarCommentsModal.Style';
import ButtonWrapper from '../../../../../Profile/Contents/Buttons/Button.Style';
import { NewsContext } from '../../../../../../Context/news/data';
import { contextCommentNewsWrapper } from '../../../../../../Context/news/commentsData';

class BarDownComment extends React.Component {
  static contextType = NewsContext;

  state = {
    visible: false,
    bottom: false
  };

  onClick = () => {
    const { visible } = this.state;

    this.setState({
      visible: !visible
    });
  };

  onClickTrue = (event) => {
    event.preventDefault();
    const { visible } = this.state;

    this.setState(
      {
        bottom: true,
        visible: !visible
      },
      () => this.onSubmit()
    );
  };

  onClickFalse = (event) => {
    event.preventDefault();
    const { visible } = this.state;

    this.setState(
      {
        bottom: false,
        visible: !visible
      },
      () => this.onSubmit()
    );
  };

  onSubmit = () => {
    const { idProfileNews } = this.context;
    const { actionsCommentsNews, idComment } = this.props;
    const { bottom } = this.state;

    if (bottom) {
      actionsCommentsNews.onClickPublicResponse(idProfileNews, idComment);
    } else {
      actionsCommentsNews.onClickCancel();
    }
  };

  render() {
    const { news, idProfileNews } = this.context;

    const {
      comments,
      comment,
      actionsCommentsNews,
      idComment,
      idNews
    } = this.props;

    const { visible } = this.state;

    return (
      <div>
        <BarDownCommentWrapper
          style={{
            display: `${
              news[idNews].idProfileAuthor === idProfileNews && // eslint-disable-line
              comments[idComment].idProfileResponse === undefined
                ? ''
                : 'none'
            }`
          }}
          onClick={() => this.onClick()}
        >
          <span className="fa fa-comment-o" />
          <span> Escreva um resposta ao seu leitor... </span>
        </BarDownCommentWrapper>

        <BarCommentsModalWrapper
          style={{ display: `${visible ? 'block' : ''}` }}
        >
          {/* prettier-ignore */}
          <span
            className="close"
            onClick={(event) => {
              this.onClick();
              actionsCommentsNews.onClickCancel(event);
            }}
          >&times; {/* eslint-disable-line */}
          </span>

          <form onSubmit={this.onSubmit}>
            <textarea
              className="textarea"
              id="img01"
              value={comment}
              onChange={actionsCommentsNews.onChange}
            />
            <div className="buttons">
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
                  onClick={this.onClickTrue}
                >
                  {' Publicar '}
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
                  onClick={this.onClickFalse}
                >
                  {' Cancelar '}
                </button>
              </ButtonWrapper>
            </div>
          </form>
        </BarCommentsModalWrapper>
      </div>
    );
  }
}

export default contextCommentNewsWrapper(BarDownComment);
