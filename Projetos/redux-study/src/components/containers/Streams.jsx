import React from "react";

import Loader from "../presentationals/Loader/Loader";
import StreamCard from "../presentationals/StreamCard/StreamCard";
import Alert from "../presentationals/Alert/Alert";

import RequestApi from "../../actions/RequestApi";

class Streams extends React.Component {
  componentDidMount = () => {
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.props.store.dispatch(RequestApi());
  };

  render() {
    const stateProps = this.props.store.getState();
    const status = stateProps.status;
    const streams = stateProps.streams;
    const error = stateProps.error;

    return (
      <div>
        {status === "loading" ? (
          <Loader />
        ) : status === "success" ? (
          <StreamCard streams={streams} />
        ) : status === "error" ? (
          <Alert error={error} />
        ) : (
          <div>Inesperado</div>
        )}
      </div>
    );
  }
}

export default Streams;
