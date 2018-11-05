import React from "react";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Raven from "raven-js";
import createRavenMiddleware from "raven-for-redux";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import MainWrapper from "./styles/Main.Style";
import TwitchApp from "./reducers/TwitchApp";

let store = createStore(TwitchApp, applyMiddleware(thunk, logger, createRavenMiddleware(Raven, {})));

ReactDOM.render(
  <Provider store={store}>
    <MainWrapper>
      <App store={store} />
    </MainWrapper>
  </Provider>,
  document.getElementById("root")
);
