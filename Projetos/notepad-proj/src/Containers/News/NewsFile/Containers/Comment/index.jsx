import React, { useContext } from 'react';

import CommentWrapper from './Comment.Style';
import HeaderWrapper from '../../../Context/NewsContainer/Header/Header.Style';
import BarDownComment from './BarDownComment';
import { CommentNewsContext } from '../../../../../Context/news/commentsData';
import { NewsContext } from '../../../../../Context/news/data';
import { ProfileContext } from '../../../../../Context/profile';
import { dateConvert } from '../../../../../Utils/dateConvert';

const Comment = (props) => {
  const { comments } = useContext(CommentNewsContext);
  const { profiles } = useContext(ProfileContext);
  const { idProfileNews } = useContext(NewsContext);

  return (
    <React.Fragment>
      {comments.map((comment) => {
        return (
          comment.idNews === props.idNews && (
            <CommentWrapper key={comment.id}>
              <HeaderWrapper className="header">
                <img src={profiles[comment.idProfile].img} alt="profile" />
                <span className="text">
                  <span className="name">
                    {profiles[comment.idProfile].name}
                  </span>
                  <br />
                  <span className="date date-content">
                    {dateConvert(comment.dateOfComment)}
                  </span>
                </span>
              </HeaderWrapper>
              <p style={{ marginBottom: '20px', lineHeight: '1.4' }}>
                {comment.comment}
              </p>
              {comment.idProfileResponse !== undefined && (
                <div
                  style={{
                    borderTop: '1px solid #ccc',
                    paddingTop: '20px'
                  }}
                >
                  <HeaderWrapper className="header">
                    <img
                      src={profiles[comment.idProfileResponse].img}
                      alt="profile"
                    />
                    <span className="text">
                      <span className="name">
                        {profiles[comment.idProfileResponse].name}
                      </span>
                      <br />
                      <span className="date date-content">
                        {dateConvert(comment.dateOfCommentResponse)}
                      </span>
                    </span>
                  </HeaderWrapper>
                  <p>{comment.commentResponse}</p>
                </div>
              )}
              <BarDownComment
                idNews={props.idNews}
                idComment={comment.id}
                idProfile={idProfileNews}
              />
            </CommentWrapper>
          )
        );
      })}
    </React.Fragment>
  );
};

export default Comment;
