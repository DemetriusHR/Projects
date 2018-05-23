import React from "react";
import Day4Wrapper from "./Day4.Style";
import Header from "./Header/Header";
import Component from "./Component/Component";
import 'whatwg-fetch';

class Day4 extends React.PureComponent {
  state = {
    activities: [
      {
        timestamp: new Date().getTime(),
        text: " Duis a placerat diam, in euismod felis.",
        user: {
          id: 1,
          name: "Nate",
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: "Ari", text: " Etiam molestie diam nec velit cursus vestibulum." }]
      },
      {
        timestamp: new Date().getTime(),
        text: "Nam ipsum dui, porttitor quis sagittis sed.",
        user: {
          id: 2,
          name: "Ari",
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: "Nate", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac rhoncus mi." }]
      }
    ]
  };
  render() {
    return (
      <Day4Wrapper>
        <div className="notificationsFrame">
          <div className="panel">
            <Header title="Profile" />
            <Component comments={this.state.activities} />
          </div>
        </div>
      </Day4Wrapper>
    );
  }
}

export default Day4;
