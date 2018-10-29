import React from 'react';

import HeaderWrapper from './Header.Style';
import { dateConvert } from '../../../../Utils/dateConvert';

const Header = (props) => {
  const { date, imgUser, name, nickname } = props; // eslint-disable-line
  const dateCoverted = dateConvert(date);

  return (
    <HeaderWrapper>
      <img src={imgUser} className="image" alt="User" />
      <div className="text">
        <span className="name">{`${name} `}</span>
        <span className="nickname">{` @${nickname}`}</span>
        <br />
        <span className="date">{`há ${dateCoverted}`}</span>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
