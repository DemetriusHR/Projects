import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.scss";
import App from "./FirstPage/App.jsx";
import SecondPage from "./SecondPage/index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/second" component={SecondPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
