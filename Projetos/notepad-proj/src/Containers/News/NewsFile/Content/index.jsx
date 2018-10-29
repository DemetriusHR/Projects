import React, { useContext } from 'react';

import ContentWrapper from './Content.Style';
import TitleWrapper from '../Containers/Title/Title.Style';
import SubtitleWrapper from '../Containers/Subtitle/Subtitle.Style';
import HeaderWrapper from '../../Context/NewsContainer/Header/Header.Style';
import BarComments from '../Containers/BarComments';
import Comment from '../Containers/Comment';
import Bottom from '../Containers/BottomBar';

import { ProfileContext } from '../../../../Context/profile';
import { NewsContext } from '../../../../Context/news/data';
import { dateConvert } from '../../../../Utils/dateConvert';

const NewsFile = (props) => {
  const { profiles } = useContext(ProfileContext);
  const { idNews, idProfileNews } = useContext(NewsContext);
  const { idAuthor, date, title, subtitle, content, like, save } = props; // eslint-disable-line

  return (
    <ContentWrapper>
      <HeaderWrapper className="header-content">
        <img src={profiles[idAuthor].img} alt="profile" />
        <span className="text">
          <span className="name name-content">{profiles[idAuthor].name}</span>
          <br />
          <span className="date date-content">{dateConvert(date)}</span>
        </span>
      </HeaderWrapper>
      <div>
        <TitleWrapper>{title}</TitleWrapper>
        <SubtitleWrapper>{subtitle}</SubtitleWrapper>
        {content}
        <Bottom
          like={like}
          save={save}
          idAuthor={idAuthor}
          idProfile={idProfileNews}
          idNews={idNews}
        />
      </div>
      <BarComments idProfile={idProfileNews} idNews={idNews} />
      <Comment idNews={idNews} idProfile={idProfileNews} />
    </ContentWrapper>
  );
};

export default NewsFile;
