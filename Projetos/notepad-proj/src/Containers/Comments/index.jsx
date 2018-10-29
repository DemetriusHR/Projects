import React, { useContext } from 'react';

import CommentWrapper from './Comment.Style';

import Header from './Header';
import Content from './Content';
import NavBar from '../../Components/NavBar';
import { CommentContext } from '../../Context/comment';
import { dateConvertData } from '../../Utils/dateConvert';

function textDrop(comments, idProfileComment) {
  return (
    <span style={{ lineHeight: '1.3' }}>
      {'Last Comment: '}
      <br />
      {'há '}
      {dateConvertData(comments, idProfileComment)}
    </span>
  );
}

const Comments = () => {
  const { comments, idProfileComment } = useContext(CommentContext);
  return (
    <CommentWrapper className="text-color">
      <NavBar
        to="/"
        text="Comments"
        textDropDown={textDrop(comments, idProfileComment)}
        enable="enable"
      />
      <div className="scrolled scroll-styled">
        <Header />
        <Content />
      </div>
    </CommentWrapper>
  );
};

export default Comments;
