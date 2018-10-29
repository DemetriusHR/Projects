import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ProfileWrapper from './Profile.Style';
import { NotesContext } from '../../../../../Context';

const Profile = () => {
  const { profile } = useContext(NotesContext);
  return (
    <ProfileWrapper
      className="border"
      style={{ display: `${profile ? '' : 'none'}` }}
    >
      <ul>
        <Link to="/profile">
          <li className="content">
            <span className="fa fa-user" />
            <span className="margin-styled__1"> Profile </span>
          </li>
        </Link>
        <Link to="/tasks">
          <li className="content">
            <span className="fa fa-tasks" />
            <span className="margin-styled__2"> Tasks </span>
          </li>
        </Link>
        <Link to="/comment">
          <li className="content">
            <span className="fa fa-comment-o" />
            <span className="margin-styled__2"> Comment </span>
          </li>
        </Link>
        <Link to="/news">
          <li className="border content content-notoff">
            <span className="fa fa-newspaper-o" />
            <span className="margin-styled__2"> News </span>
          </li>
        </Link>
        <Link to="/logoff">
          <li className="content content-off">
            <span className="fa fa-power-off" />
            <span className="margin-styled__1"> Logoff </span>
          </li>
        </Link>
      </ul>
    </ProfileWrapper>
  );
};

export default Profile;
