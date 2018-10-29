import React, { Fragment } from 'react';

import Profile from './Profile';
import Tag from './Tag';
import Note from './Note';

const Content = () => (
  <Fragment>
    <Profile />
    <Tag />
    <Note />
  </Fragment>
);

export default Content;
