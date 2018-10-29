import React, { useContext } from 'react';

import ProfileWrapper from './Profile.Style';
import Content from './Content';
import NavBar from '../../Components/NavBar';
import { NotesContext } from '../../Context';
import { ProfileContext } from '../../Context/profile';

const Profile = () => {
  const { idProfileNote } = useContext(NotesContext);
  const { profiles } = useContext(ProfileContext);

  return (
    <ProfileWrapper className="text-color">
      <NavBar to="/" text={`@${profiles[idProfileNote].nickname}`} />
      <div className="content">
        <Content />
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
