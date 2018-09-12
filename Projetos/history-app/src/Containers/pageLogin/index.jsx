import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoginWrapper from './pageLoginStyle';
import Button from '../../Components/Buttons/ButtonTwo';
import ChangeLanguage from '../../Components/ChangeLanguage';
import dataBase from '../../Utils/dataBase';

class PageLogin extends React.PureComponent {
  state = {
    createAccount: false
  }

  onClickCreate = () => {
    this.setState({
      createAccount: true
    });
  }

  render() {
    const { language } = this.props;
    const { createAccount } = this.state;

    return (
      <PageLoginWrapper>
        <ChangeLanguage language={language} />
        <div className="login-card">
          <div className="esc-card">
            <Link to="/">
              X
            </Link>
          </div>
          <div className="login">
            {createAccount ? (
              <React.Fragment>
                <div className="header-card header-card-create">
                  <h1>
                    {dataBase[language].createAccount}
                  </h1>
                </div>
                <div className="content-card content-card-create">
                  <p>{dataBase[language].nickname}</p>
                  <input type="text" required="required" />
                  <p>{dataBase[language].email}</p>
                  <input type="email" required="required" />
                  <p>{dataBase[language].password}</p>
                  <input type="password" required="required" />
                  <p>{dataBase[language].confirmPass}</p>
                  <input type="password" required="required" />
                  <Button text={<span>{dataBase[language].create}</span>} />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="header-card">
                  <h1> Login </h1>
                </div>
                <div className="content-card">
                  <p>{dataBase[language].email}</p>
                  <input type="email" required="required" />
                  <p>{dataBase[language].password}</p>
                  <input type="password" required="required" />
                  <Button text={dataBase[language].signIn} />
                </div>
                <div className="finish-card">
                  <p>
                    {dataBase[language].dontAccount}
                    <span className="here-finish" onClick={() => this.onClickCreate()}>
                      {` ${dataBase[language].here}`}
                    </span>
                  </p>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </PageLoginWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language.language
  };
};

export default connect(mapStateToProps)(PageLogin);
