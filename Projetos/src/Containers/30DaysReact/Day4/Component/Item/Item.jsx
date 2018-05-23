import React from "react";

class ActivityItem extends React.Component {
  render() {
    const { activity } = this.props;
    return (
      <div className="item">
        <div className="avatar">
          <img alt="Doug" src={activity.user.avatar} />
        </div>

        <span className="time">{activity.timestamp}</span>
        <p>{activity.text}</p>
        <div className="commentCount">{activity.comments.length}</div>
      </div>
    );
  }
}

export default ActivityItem;
