/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Providers from './Context';
import App from './Containers/index/App';
import Tasks from './Containers/Tasks/index';
import Profile from './Containers/Profile/index';
import Logoff from './Containers/Logoff';
import Comments from './Containers/Comments';
import News from './Containers/News';
import './index.css';

ReactDOM.render(
  <Providers>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/profile" component={Profile} />
        <Route path="/comment" component={Comments} />
        <Route path="/logoff" component={Logoff} />
        <Route path="/news" component={News} />
      </Switch>
    </BrowserRouter>
  </Providers>,
  document.getElementById('root')
);
