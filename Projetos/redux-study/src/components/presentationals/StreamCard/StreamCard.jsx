import React from "react";

import StreamCardWrapper from "./StreamCard.Style";

class StreamCard extends React.Component {
  render() {
    const streams = this.props.streams;
    console.log(streams);

    return (
      <StreamCardWrapper>
        {streams.map(stream => (
          <div key={stream._id} className="card">
            <img
              className="stream-cover"
              src={stream.preview.medium}
              alt="screen of stream"
            />
            <p className="name">
              <span className="fa fa-address-card" />
              {" "}{stream.channel.display_name}
            </p>
            <p className="game">
              <span className="fa fa-gamepad" />
              {" "}{stream.channel.game}
            </p>
            <p className="followers">
              <span className="fa fa-greater-than" />
              {" "}{stream.channel.followers}
            </p>
            <p className="viewers">
              <span className="fa fa-eye" />
              {" "}{stream.viewers}
            </p>
          </div>
        ))}
      </StreamCardWrapper>
    );
  }
}
export default StreamCard;
