import React, { Component } from "react";

import Streams from "./components/containers/Streams";

class App extends Component {
  render() {
    const store = this.props.store;

    return (
      <div style={{ marginTop: "-8px" }} className="app">
        <Streams store={store} />
      </div>
    );
  }
}

export default App;
