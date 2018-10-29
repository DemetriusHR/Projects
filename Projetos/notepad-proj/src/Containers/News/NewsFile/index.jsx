import React, { useState, useContext } from 'react';

import NewsFileWrapper from './NewsFile.Style';

import Content from './Content';
import Informations from './Informations';
import NavBar from '../../../Components/NavBar';
import { NewsContext } from '../../../Context/news/data';
import { CommentNewsContext } from '../../../Context/news/commentsData';
import { saveContador } from '../../../Utils/savesConvert';
import { likesContador } from '../../../Utils/likesConvert';
import { commentsCont, responseCont } from '../../../Utils/commentsCont';

function NewsFile() {
  const [state] = useState({
    display: true
  });
  const { news, idProfileNews, idNews } = useContext(NewsContext);
  const { comments } = useContext(CommentNewsContext);

  function textDrop() {
    return (
      <span style={{ lineHeight: '1.6' }}>
        <span>Likes: </span>
        {likesContador(news, idProfileNews)}
        <br />
        <span>Saves: </span>
        {saveContador(news, idProfileNews)}
        <br />
        <span>
          <span>Comments: </span>
          {commentsCont(comments, idProfileNews)}
        </span>
        <br />
        <span>
          <span>Responses: </span>
          {responseCont(comments, idProfileNews)}
        </span>
      </span>
    );
  }

  return (
    <NewsFileWrapper>
      <NavBar
        to="/news"
        text="News"
        enable="enable"
        textDropDown={textDrop()}
      />
      <div className="scrolled scroll-styled">
        <div style={{ display: `${state.display ? 'block' : 'none'}` }}>
          <Informations like={news[idNews].likes} save={news[idNews].save} />
        </div>
        <Content
          idAuthor={news[idNews].idProfileAuthor}
          date={news[idNews].publishedAt}
          title={news[idNews].title}
          subtitle={news[idNews].subtitle}
          content={news[idNews].content}
          like={news[idNews].likes}
          save={news[idNews].save}
        />
      </div>
    </NewsFileWrapper>
  );
}

export default NewsFile;
