import React from 'react';

import dataBase from '../Utils/dataBase.json';

export const LanguageContext = React.createContext();

export default class LanguageProvider extends React.Component {
  state = {
    actions: {
      changeLanguagueEnglish: () => this.onChangeLanguage('English'),
      changeLanguagueEspanol: () => this.onChangeLanguage('Español'),
      changeLanguaguePortugues: () => this.onChangeLanguage('Português'),
      onCreateAccount: () => this.onCreateAccount(),
      outLogin: () => this.outLogin(),
      onLogin: (email, password) => this.onLogin(email, password),
      onConfirmCreateAccount: (nickname, email, password, confirmPassword) =>
        this.onConfirmCreateAccount(nickname, email, password, confirmPassword),
      exitError: () => this.exitError(),
      onClickOk: (verify, email, password) =>
        this.onClickOk(verify, email, password),
      outIndex: () => this.outIndex()
    },
    language: 'English',
    createAccount: false,
    login: dataBase.login,
    error: '',
    loginOk: false,
    idLogin: 0
  };

  onChangeLanguage = (language) => {
    this.setState({
      language
    });

    this.exitError();
  };

  onCreateAccount = () => {
    this.setState({
      createAccount: true
    });
  };

  outLogin = () => {
    this.setState({
      createAccount: false
    });

    this.exitError();
  };

  onLogin = (email, password) => {
    const search = this.filter(email, undefined, password);

    return search.length > 0;
  };

  outIndex = () => {
    this.setState({
      loginOk: false
    });
  };

  onConfirmCreateAccount = (nickname, email, password, confirmPassword) => {
    const { language, login } = this.state;
    const {
      errorValueNull,
      errorNotEqual,
      errorEmail,
      errorNickname
    } = dataBase[language];
    let error = '';

    if (password === confirmPassword) {
      error = password === '' ? errorValueNull : '';

      if (error !== '') {
        this.setState({
          error
        });

        return;
      }

      const emailConfirm = this.filter(email);

      if (emailConfirm.length > 0) {
        error = errorEmail;

        this.setState({
          error
        });

        return;
      }

      const nicknameConfirm = this.filter(undefined, nickname);

      if (nicknameConfirm.length > 0) {
        error = errorNickname;

        this.setState({
          error
        });

        return;
      }

      this.setState({
        login: [
          ...login,
          {
            id: login.length,
            nickname,
            email,
            password
          }
        ]
      });

      this.outLogin();
    } else {
      this.setState({
        error: errorNotEqual
      });
    }
  };

  exitError = () => {
    this.setState({
      error: ''
    });
  };

  onClickOk = (verify, email, password) => {
    this.setState({
      loginOk: verify
    });

    if (verify) {
      const search = this.filter(email, undefined, password);

      this.setState({
        idLogin: search[0].id
      });
    }
  };

  filter = (email, nickname, password) => {
    const { login } = this.state;
    let search = [];

    if (
      email !== undefined &&
      nickname === undefined &&
      password === undefined
    ) {
      search = login.filter((post) => {
        return post.email === email;
      });
    } else if (
      email === undefined &&
      nickname !== undefined &&
      password === undefined
    ) {
      search = login.filter((post) => {
        return post.nickname === nickname;
      });
    } else {
      search = login.filter((post) => {
        return post.email === email && post.password === password;
      });

      if (search.length === 0) {
        search = login.filter((post) => {
          return post.nickname === email && post.password === password;
        });
      }
    }

    return search;
  };

  render() {
    const { children } = this.props;
    const { language } = this.state;

    return (
      <LanguageContext.Provider
        value={{ ...this.state, dataBase: dataBase[language] }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }
}
