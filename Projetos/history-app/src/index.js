import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import PageInitial from './Containers/pageInitial';
import PageLogin from './Containers/pageLogin';
import configStore from './Store/config_store';

const store = configStore();

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={PageInitial} />
        <Route path="/login" component={PageLogin} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
