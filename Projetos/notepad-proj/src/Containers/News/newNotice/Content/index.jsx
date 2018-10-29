import React from 'react';

import ContentWrapper from './Content.Style';
import { NewsContext } from '../../../../Context/news/data';
import ButtonWrapper from '../../../Profile/Contents/Buttons/Button.Style';

class Content extends React.Component {
  static contextType = NewsContext;

  state = {
    submit: false
  };

  onClickPublic = () => {
    this.setState({
      submit: true
    });
  };

  onClickCancel = () => {
    this.setState({
      submit: false
    });
  };

  onSubmit = (event) => {
    const { actionsNews } = this.props;
    const { submit } = this.state;

    if (submit) {
      actionsNews.onPublicArticle(event);
    } else {
      actionsNews.onCancel(event);
    }
  };

  render() {
    // eslint-disable-next-line
    const { actionsNews, title, subtitle, content, linkImg } = this.context;

    return (
      <ContentWrapper>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <div className="label">Title</div>
          <input
            type="text"
            className="styled title"
            value={title}
            onChange={(e) => actionsNews.onChangeTitle(e)}
            placeholder="Title..."
            autoComplete="off"
          />
          <div className="label">Subtitle</div>
          <input
            type="text"
            className="styled title"
            value={subtitle}
            onChange={(e) => actionsNews.onChangeSubtitle(e)}
            placeholder="Subtitle..."
            autoComplete="off"
          />
          <div className="label">Content of the article</div>
          <textarea
            value={content}
            onChange={(e) => actionsNews.onChangeContent(e)}
            placeholder="Article complete..."
            cols="30"
            rows="5"
            className="styled note scroll-styled"
          />
          <div className="label">Image of Front</div>
          <input
            value={linkImg}
            onChange={(e) => actionsNews.onChangeLinkImg(e)}
            type="text"
            className="styled title"
            placeholder="Link of Image..."
            autoComplete="off"
          />
          <div className="buttons-content">
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
                onClick={() => this.onClickPublic()}
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
                onClick={() => this.onClickCancel()}
              >
                {' Cancelar '}
              </button>
            </ButtonWrapper>
          </div>
        </form>
      </ContentWrapper>
    );
  }
}

export default Content;
