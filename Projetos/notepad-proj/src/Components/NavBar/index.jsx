import React from 'react';
import { Link } from 'react-router-dom';

import NavBarWrapper from './NavBar.Style';
import DropDown from './DropDown/DropDown';
import { contextProfileWrapper } from '../../Context/profile';
import { contextCommentWrapper } from '../../Context/comment';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onClick = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    });
  };

  render() {
    const {
      to,
      text,
      textDropDown,
      enable,
      profiles,
      idProfileComment
    } = this.props;

    const { visible } = this.state;

    return (
      <NavBarWrapper
        style={{
          borderBottom: '1px solid #b1b1b1',
          boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.36)'
        }}
      >
        <Link to={to}>
          <span className="fa fa-angle-left back" />
        </Link>
        <p className="text">{text}</p>
        <div style={{ display: `${enable !== undefined ? '' : 'none'}` }}>
          <div className="foto-styled" onClick={this.onClick}>
            <img src={profiles[idProfileComment].img} alt="Profile" />
          </div>
          <div style={{ display: `${visible ? '' : 'none'}` }}>
            <DropDown
              nickname={profiles[idProfileComment].nickname}
              text={textDropDown}
            />
          </div>
        </div>
      </NavBarWrapper>
    );
  }
}
export default contextProfileWrapper(contextCommentWrapper(NavBar));
