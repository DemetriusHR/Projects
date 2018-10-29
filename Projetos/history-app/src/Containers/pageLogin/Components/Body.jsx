import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import CreateCard from './createCard';
import LoginCard from './loginCard';
import { LanguageContext } from '../../../Context';

const Body = () => {
  const {
    createAccount,
    actions: { outLogin }
  } = useContext(LanguageContext);

  return (
    <div className="login-card">
      <div className="esc-card dont-select" onClick={(e) => outLogin(e)}>
        <Link to="/">X</Link>
      </div>
      <div className="login">
        {createAccount ? <CreateCard /> : <LoginCard />}
      </div>
    </div>
  );
};

export default Body;
