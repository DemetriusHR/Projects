import React from "react";

import LoaderWrapper from "./Loader.Style";

class Loader extends React.Component {
  render() {
    return (
      <LoaderWrapper>
        <div className="line-1" />
        <div className="line-2">
          <div className="triangle">
            <div className="shine" />
          </div>
        </div>
        <div className="line-3">
          <div className="triangle-sm">
            <div className="shine" />
          </div>
        </div>
        <div className="line-4">
          <div className="triangle-sm">
            <div className="shine" />
          </div>
        </div>
      </LoaderWrapper>
    );
  }
}

export default Loader;
