import React from 'react';

import BarCommentsWrapper from './BarComments.Style';
import ParagrafoWrapper from '../Paragrafo/Paragrafo.Style';
import BarCommentsModalWrapper from './BarCommentsModal.Style';
import { NewsContext } from '../../../../../Context/news/data';
import { contextCommentNewsWrapper } from '../../../../../Context/news/commentsData';
import ButtonWrapper from '../../../../Profile/Contents/Buttons/Button.Style';

class BarComments extends React.Component {
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

  onClickTrue = (e) => {
    e.preventDefault();
    const { visible } = this.state;

    this.setState(
      {
        bottom: true,
        visible: !visible
      },
      () => this.onSubmit()
    );
  };

  onClickFalse = (e) => {
    e.preventDefault();
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
    const { bottom } = this.state;
    const { idNews, idProfileNews } = this.context;
    const { actionsCommentsNews } = this.props;

    if (bottom) {
      actionsCommentsNews.onClickPublic(idNews, idProfileNews);
    } else {
      actionsCommentsNews.onClickCancel();
    }
  };

  render() {
    const { idProfileNews, news, idNews } = this.context;
    const { actionsCommentsNews, comment } = this.props;
    const { visible } = this.state;

    return (
      <ParagrafoWrapper
        style={{
          display: `${
            news[idNews].idProfileAuthor === idProfileNews ? 'none' : ''
          }`
        }}
      >
        <BarCommentsWrapper>
          <div onClick={() => this.onClick()} style={{ cursor: 'pointer' }}>
            <span className="fa fa-comment-o" />
            {'Escreva seu comentário...'}
          </div>
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
            >&times;{/* eslint-disable-line */}
            </span>

            <form onSubmit={(event) => this.onSubmit(event)}>
              <textarea
                className="textarea"
                id="img01"
                value={comment}
                onChange={(e) => actionsCommentsNews.onChange(e)}
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
        </BarCommentsWrapper>
      </ParagrafoWrapper>
    );
  }
}

export default contextCommentNewsWrapper(BarComments);
