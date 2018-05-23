import React, { Component } from "react";
import logo from "./logo.svg";
import AppWrapper from "./App.Style";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Home</h1>
          </header>
          <p className="App-intro">
            <Link to="/contador">
              <div className="img-align contador">
                <div class="overlay">
                  <div class="text">Contador</div>
                </div>
              </div>
            </Link>
            <br />
            <Link to="/todo">
              <div className="img-align todo">
                <div class="overlay">
                  <div class="text">TodoList</div>
                </div>
              </div>
            </Link>
            <br />
            <Link to="/face">
              <div className="img-align face">
                <div class="overlay">
                  <div class="text">Face</div>
                </div>
              </div>
            </Link>
            <br />
            <Link to="/clima">
              <div className="img-align clima">
                <div class="overlay">
                  <div class="text">Clima</div>
                </div>
              </div>
            </Link>
          </p>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
