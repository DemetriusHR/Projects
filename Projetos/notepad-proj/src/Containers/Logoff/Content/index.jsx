import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ContentWrapper from './Content.Style';
import { NotesContext } from '../../../Context';
import { ProfileContext } from '../../../Context/profile';
import { CommentContext } from '../../../Context/comment';
import { TasksContext } from '../../../Context/tasks';
import { NewsContext } from '../../../Context/news/data';

const Content = () => {
  const { profiles } = useContext(ProfileContext);
  const { actionsComment } = useContext(CommentContext);
  const { actionsTasks } = useContext(TasksContext);
  const { actions } = useContext(NotesContext);
  const { actionsNews } = useContext(NewsContext);
  return (
    <ContentWrapper>
      {profiles.map((profile) => (
        <Link to="/">
          <div
            className="container effect-styled"
            key={profile.key}
            onClick={() => {
              actionsComment.onChangeIdProfile(profile.id);
              actionsTasks.onChangeIdProfile(profile.id);
              actions.onChangeIdProfile(profile.id);
              actionsNews.onChangeIdProfile(profile.id);
            }}
          >
            <p>{`Nome: ${profile.name} `}</p>
            <p>{`Nickname: ${profile.nickname} `}</p>
          </div>
        </Link>
      ))}
    </ContentWrapper>
  );
};

export default Content;
