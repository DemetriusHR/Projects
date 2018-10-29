import React from 'react';
import { Link } from 'react-router-dom';

import HeaderWrapper from './Header.Style';
import { dateConvert } from '../../../../../Utils/dateConvert';

const Header = (props) => {
  // eslint-disable-next-line
  const { date, idProfileAuthor, actionsNews, imgUser, name } = props;
  const dateConverted = dateConvert(date);
  return (
    <HeaderWrapper>
      <img src={imgUser} className="image" alt="User" />
      <div className="text">
        <div>
          <Link to="/profile">
            <span
              className="name"
              onClick={() => actionsNews.onChangeIdProfile(idProfileAuthor)}
            >
              {name}
            </span>
          </Link>
        </div>
        <Link to="news/content">
          <div style={{ marginTop: '5px' }}>
            <span className="date">{dateConverted}</span>
          </div>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
