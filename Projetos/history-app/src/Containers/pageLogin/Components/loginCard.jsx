import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../../Components/Buttons/ButtonTwo';
import { onCreateAccount } from '../../../Store/actions/index';

const LoginCard = (props) => {
  const {
    email, password, signIn, dontAccount, here
  } = props.data;

  return (
    <React.Fragment>
      <div className="header-card">
        <h1> Login </h1>
      </div>
      <div className="content-card">
        <p>{email}</p>
        <input type="email" required="required" />
        <p>{password}</p>
        <input type="password" required="required" />
        <Link to="/index">
          <Button text={signIn} />
        </Link>
      </div>
      <div className="finish-card">
        <p>
          {dontAccount}
          <span className="here-finish" onClick={() => props.onCreateAccount()}>
            {` ${here}`}
          </span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { onCreateAccount })(LoginCard);
