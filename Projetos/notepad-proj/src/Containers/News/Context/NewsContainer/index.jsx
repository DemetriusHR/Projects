import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import NewsContainerWrapper from './NewsContainer.Style';
import Header from './Header';
import DownBar from './DownBar';
import { NewsContext } from '../../../../Context/news/data';
import { ProfileContext } from '../../../../Context/profile';

const NewsContainer = () => {
  const { news, actionsNews } = useContext(NewsContext);
  const { profiles } = useContext(ProfileContext);

  return news.map((notice) => (
    <NewsContainerWrapper
      image={notice.urlToImage}
      onClick={() => actionsNews.setStateIdNews(notice.id)}
      key={notice.id}
    >
      <Header
        date={notice.publishedAt}
        imgUser={profiles[notice.idProfileAuthor].img}
        name={profiles[notice.idProfileAuthor].name}
        idProfileAuthor={notice.idProfileAuthor}
        url={notice.url}
      />
      <Link to="news/content">
        <div
          className="img-news"
          style={{ visibility: `${notice.urlToImage !== '' ? '' : 'hidden'}` }}
        />
        <div
          className="title-news"
          style={{
            marginTop: `${notice.urlToImage !== '' ? '10px' : '-27vh'}`
          }}
        >
          {notice.title}
        </div>
        <span className="subtitle-news">{notice.subtitle}</span>
        <br />
      </Link>
      <div
        style={{
          marginTop: `${notice.subtitle !== '' ? '20px' : '-10px'}`
        }}
      >
        <Link to="news/content">
          <span className="read-news"> Read More... </span>
        </Link>
        <DownBar like={notice.likes} id={notice.id} saves={notice.save} />
      </div>
    </NewsContainerWrapper>
  ));
};

export default NewsContainer;
