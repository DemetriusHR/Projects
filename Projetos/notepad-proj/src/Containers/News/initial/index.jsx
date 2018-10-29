import React, { useContext } from 'react';

import NewsWrapper from './News.Style';
import Context from '../Context';
import NavBar from '../../../Components/NavBar';
import { NewsContext } from '../../../Context/news/data';
import { likesContador } from '../../../Utils/likesConvert';
import { saveContador } from '../../../Utils/savesConvert';

function textDrop(news, idProfileNews) {
  return (
    <span style={{ lineHeight: '1.6' }}>
      <span>Likes: </span>
      {likesContador(news, idProfileNews)}
      <br />
      <span>Saves: </span>
      {saveContador(news, idProfileNews)}
    </span>
  );
}

const News = () => {
  const { news, idProfileNews } = useContext(NewsContext);
  return (
    <NewsWrapper>
      <NavBar
        to="/"
        text="News"
        enable="enable"
        textDropDown={textDrop(news, idProfileNews)}
      />
      <div className="content-news scrolled scroll-styled">
        <Context />
      </div>
    </NewsWrapper>
  );
};

export default News;
