import React from 'react';
import { Link } from 'react-router-dom';

import ContextWrapper from './Context.Style';
import NewsContainer from './NewsContainer';
import HeaderInitial from '../NewsFile/Containers/HeaderContentInitial';

const Context = () => (
  <ContextWrapper>
    <Link to="news/new">
      <HeaderInitial />
    </Link>
    <NewsContainer />
  </ContextWrapper>
);

export default Context;
