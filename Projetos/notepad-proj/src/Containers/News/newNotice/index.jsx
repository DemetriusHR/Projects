import React from 'react';

import NavBar from '../../../Components/NavBar';
import Content from './Content';
import NewsFileWrapper from '../NewsFile/NewsFile.Style';

const newNotice = () => (
  <NewsFileWrapper>
    <NavBar
      to="/news"
      text="News"
      enable="enable"
      textDropDown={<span style={{ lineHeight: '1.6' }}>text of dropdown</span>}
    />
    <div className="scrolled scroll-styled">
      <Content />
    </div>
  </NewsFileWrapper>
);

export default newNotice;
