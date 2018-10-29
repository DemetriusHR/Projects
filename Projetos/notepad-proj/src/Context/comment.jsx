import React from 'react';

import { dateNow } from '../Utils/dateConvert';
import dataBase from './jsons/dataComment.json';

export const CommentContext = React.createContext();

export default class CommentProvider extends React.Component {
  state = {
    comments: dataBase.comments,
    actionsComment: {
      onChange: (e) => this.onChange(e),
      onClickPublic: (e) => this.onClickPublic(e),
      onClickCancel: (e) => this.onClickCancel(e),
      onChangeIdProfile: (idProfile) => this.onChangeIdProfile(idProfile)
    },
    idCont: 4,
    idProfileComment: 0,
    dateOfComment: '08/02/2018 ',
    comment: ''
  };

  onChange = (event) => {
    const text = event.target.value;
    this.setState({ comment: text });
  };

  onClickPublic = (event) => {
    event.preventDefault();
    const { comment, idCont, idProfileComment, comments } = this.state; // eslint-disable-line

    this.setState({
      comment: comment.trim()
    });

    if (comment !== '') {
      const date = dateNow();

      this.setState({
        comments: [
          {
            id: idCont,
            idProfile: idProfileComment,
            dateOfComment: date,
            comment
          },
          ...comments
        ],
        idCont: idCont + 1,
        dateOfComment: '08/02/2018 ',
        comment: ''
      });
    }
  };

  onClickCancel = (event) => {
    event.preventDefault();
    this.setState({
      idProfile: 0,
      dateOfComment: '08/02/2018 ',
      comment: ''
    });
  };

  onChangeIdProfile = (idProfile) => {
    this.setState({
      idProfileComment: idProfile
    });
  };

  render() {
    const { children } = this.props;
    return (
      <CommentContext.Provider value={{ ...this.state }}>
        {children}
      </CommentContext.Provider>
    );
  }
}

const CommentConsumer = CommentContext.Consumer;

export function contextCommentWrapper(WrappedComponent) {
  return function Wrapper(props) {
    return (
      <CommentConsumer>
        {(context) => <WrappedComponent {...props} {...context} />}
      </CommentConsumer>
    );
  };
}
