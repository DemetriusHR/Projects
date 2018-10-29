import React from 'react';

import dataNewsComments from '../jsons/dataNewsComments.json';
import { dateNow } from '../../Utils/dateConvert';

export const CommentNewsContext = React.createContext();

export default class CommentNewsProvider extends React.Component {
  state = {
    comments: dataNewsComments.comments,
    actionsCommentsNews: {
      onChange: (event) => this.onChange(event),
      onClickPublic: (idNews, idProfile, event) =>
        this.onClickPublic(idNews, idProfile, event), // eslint-disable-line
      onClickPublicResponse: (idProfile, idComment, event) =>
        this.onClickPublicResponse(idProfile, idComment, event), // eslint-disable-line
      onClickCancel: (event) => this.onClickCancel(event)
    },
    idCont: 6,
    dateOfComment: '08/02/2018 ',
    comment: ''
  };

  onChange = (event) => {
    const text = event.target.value;

    this.setState({
      comment: text
    });
  };

  onClickPublic = (idNews, idProfile) => {
    const { comment, comments, idCont } = this.state;

    this.setState({
      comment: comment.trim()
    });

    if (comment !== '') {
      const date = dateNow();

      this.setState({
        comments: [
          ...comments,
          {
            id: idCont,
            idProfile,
            idNews,
            dateOfComment: date,
            comment
          }
        ],
        idCont: idCont + 1,
        dateOfComment: '08/02/2018 ',
        comment: ''
      });
    }
  };

  onClickPublicResponse = (idProfile, idComment) => {
    const { comment, comments } = this.state;

    this.setState({
      comment: comment.trim()
    });

    if (comment !== '') {
      const date = dateNow();
      const arrayComments = [...comments];

      arrayComments[idComment] = {
        id: arrayComments[idComment].id,
        idProfile: arrayComments[idComment].idProfile,
        idNews: arrayComments[idComment].idNews,
        dateOfComment: arrayComments[idComment].dateOfComment,
        comment: arrayComments[idComment].comment,
        idProfileResponse: idProfile,
        commentResponse: comment,
        dateOfCommentResponse: date
      };

      this.setState({
        comments: arrayComments,
        dateOfComment: '08/02/2018 ',
        comment: ''
      });
    }
  };

  onClickCancel = () => {
    this.setState({
      dateOfComment: '08/02/2018',
      comment: ''
    });
  };

  render() {
    const { children } = this.props;

    return (
      <CommentNewsContext.Provider value={{ ...this.state }}>
        {children}
      </CommentNewsContext.Provider>
    );
  }
}

const CommentNewsConsumer = CommentNewsContext.Consumer;

export function contextCommentNewsWrapper(WrappedComponent) {
  return function Wrapper(props) {
    return (
      <CommentNewsConsumer>
        {(context) => <WrappedComponent {...props} {...context} />}
      </CommentNewsConsumer>
    );
  };
}
