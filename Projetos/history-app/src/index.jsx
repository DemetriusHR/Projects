import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import PageInitial from './Containers/pageInitial';
import PageLogin from './Containers/pageLogin';
import PageContent from './Containers/pageContent';
import configStore from './Store/config_store';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={PageInitial} /> {/* eslint-disable-line */}
        <Route path="/login" component={PageLogin} />
        <Route path="/index" component={PageContent} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
