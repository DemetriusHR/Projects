import React from 'react';
import { Switch, Route } from 'react-router-dom';

import News from './initial';
import NewsFile from './NewsFile';
import newNotice from './newNotice';

const NewsRoot = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/content`} component={NewsFile} />
    <Route path={`${match.url}/new`} component={newNotice} />
    <Route component={News} />
  </Switch>
);

export default NewsRoot;
