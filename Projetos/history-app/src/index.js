import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import PageInitial from './Containers/pageInitial';
import PageLogin from './Containers/pageLogin';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={PageInitial} />
        <Route path="/login" component={PageLogin} />
      </Switch>
    </BrowserRouter>, document.getElementById('root'));
