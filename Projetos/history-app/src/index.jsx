import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import PageInitial from './Containers/pageInitial';
import PageLogin from './Containers/pageLogin';
import PageIndex from './Containers/pageIndex';
import registerServiceWorker from './registerServiceWorker';
import LanguageProvider from './Context';

ReactDOM.render(
  <LanguageProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={PageInitial} /> {/* eslint-disable-line */}
        <Route path="/login" component={PageLogin} />
        <Route path="/index" component={PageIndex} />
      </Switch>
    </BrowserRouter>
  </LanguageProvider>,
  document.getElementById('root')
);
registerServiceWorker();
