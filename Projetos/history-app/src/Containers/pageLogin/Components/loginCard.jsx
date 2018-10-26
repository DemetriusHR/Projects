import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../Components/Buttons/ButtonTwo';
import { LanguageContext } from '../../../Context';

function LoginCard() {
  const [state, setState] = useState({
    emailLogin: '',
    passwordLogin: '',
    loginVerify: true
  });

  const {
    actions: { onLogin, onClickOk, onCreateAccount },
    dataBase: { email, nickname, password, signIn, dontAccount, here }
  } = useContext(LanguageContext);
  const onLoginnig = onLogin(state.emailLogin, state.passwordLogin);

  function onChange(e) {
    const { value, name } = e.target;

    setState((statePrev) => ({
      ...statePrev,
      [name]: value
    }));
  }

  return (
    <Fragment>
      <form>
        <div className="header-card">
          <h1> Login </h1>
        </div>
        <div className="content-card">
          <p>{`${email} / ${nickname}`}</p>
          <input
            type="email"
            name="emailLogin"
            value={state.emailLogin}
            onChange={(e) => onChange(e)}
            required="required"
            style={{
              borderBottom: `${state.loginVerify ? '' : '1px solid red'}`
            }}
          />
          <p>{password}</p>
          <input
            type="password"
            name="passwordLogin"
            value={state.passwordLogin}
            onChange={(e) => onChange(e)}
            required="required"
            style={{
              borderBottom: `${state.loginVerify ? '' : '1px solid red'}`
            }}
          />
          <Link
            to={`${onLoginnig ? '/index' : '/login'}`}
            onClick={() => {
              onClickOk(onLoginnig, state.emailLogin, state.passwordLogin);

              setState({
                emailLogin: '',
                passwordLogin: '',
                loginVerify: onLoginnig
              });
            }}
          >
            <Button text={signIn} />
          </Link>
        </div>
        <div className="finish-card">
          <p>
            {dontAccount}
            <span className="here-finish dont-select" onClick={onCreateAccount}>
              {` ${here}`}
            </span>
          </p>
        </div>
      </form>
    </Fragment>
  );
}

export default LoginCard;
