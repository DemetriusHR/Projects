import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/Index/App.jsx";
import Contador from "./Containers/Contador/Contador";
import Todo from "./Containers/TodoList/Todo";
import Face from "./Containers/Face";
import Clima from "./Containers/Clima";
import DaysReact from "./Containers/30DaysReact/Day4/Day4";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/contador" component={Contador} />
      <Route path="/todo" component={Todo} />
      <Route path="/face" component={Face} />
      <Route path="/clima" component={Clima} />
      <Route path="/30-days-react" component={DaysReact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
