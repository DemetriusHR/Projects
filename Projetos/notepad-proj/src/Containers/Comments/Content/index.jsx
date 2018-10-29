import React, { useContext } from 'react';

import ContentWrapper from './Content.Style';
import Header from './Header';
import { ProfileContext } from '../../../Context/profile';
import { CommentContext } from '../../../Context/comment';

const Content = () => {
  const { comments } = useContext(CommentContext);
  const { profiles } = useContext(ProfileContext);
  return (
    <ContentWrapper>
      {comments.map((comment) => (
        <div key={comment.key} className="container">
          <Header
            imgUser={profiles[comment.idProfile].img}
            name={profiles[comment.idProfile].name}
            nickname={profiles[comment.idProfile].nickname}
            date={comment.dateOfComment}
          />
          <br />
          <span className="comment">{comment.comment}</span>
        </div>
      ))}
    </ContentWrapper>
  );
};

export default Content;
