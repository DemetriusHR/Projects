import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoginWrapper from './pageLoginStyle';

import CreateCard from './Components/createCard';
import LoginCard from './Components/loginCard';
import ChangeLanguage from '../../Components/ChangeLanguage';
import dataBase from '../../Utils/dataBase';
import { onOutLogin } from '../../Store/actions/index';

class PageLogin extends React.PureComponent {
  onEsc = (event) => {
    event.preventDefault();
    this.props.onOutLogin(); /* eslint-disable-line */
  }

  render() {
    const { language, createAccount } = this.props;
    return (
      <PageLoginWrapper>
        <ChangeLanguage />
        <div className="login-card">
          <div className="esc-card" onClick={(e) => this.onEsc(e)}>
            <Link to="/">
              X
            </Link>
          </div>
          <div className="login">
            {createAccount ? (
              <CreateCard data={dataBase[language]} />
            ) : (
              <LoginCard data={dataBase[language]} />
            )}
          </div>
        </div>
      </PageLoginWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language.language,
    createAccount: state.createAccount.createAccount
  };
};

export default connect(mapStateToProps, { onOutLogin })(PageLogin);
