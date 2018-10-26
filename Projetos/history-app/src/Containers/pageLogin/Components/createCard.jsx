import React, { Fragment } from 'react';

import Button from '../../../Components/Buttons/ButtonOne';
import { LanguageContext } from '../../../Context';

class CreateCard extends React.Component {
  static contextType = LanguageContext;

  state = {
    nicknameCreate: '',
    emailCreate: '',
    passwordCreate: '',
    confirmPassCreate: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      actions: { exitError, onConfirmCreateAccount },
      error,
      dataBase: {
        createAccount,
        nickname,
        email,
        password,
        confirmPass,
        create
      }
    } = this.context;
    const {
      nicknameCreate,
      emailCreate,
      passwordCreate,
      confirmPassCreate
    } = this.state;

    return (
      <Fragment>
        {error !== '' && (
          <div className="div-error dont-select" onClick={() => exitError()}>
            {error}
          </div>
        )}
        <div className="header-card header-card-create">
          <h1>{createAccount}</h1>
        </div>
        <div className="content-card content-card-create">
          <p>{nickname}</p>
          <input
            type="text"
            name="nicknameCreate"
            value={nicknameCreate}
            onChange={this.onChange}
            required="required"
          />
          <p>{email}</p>
          <input
            type="email"
            name="emailCreate"
            value={emailCreate}
            onChange={this.onChange}
            required="required"
          />
          <p>{password}</p>
          <input
            type="password"
            name="passwordCreate"
            value={passwordCreate}
            onChange={this.onChange}
            required="required"
          />
          <p>{confirmPass}</p>
          <input
            type="password"
            name="confirmPassCreate"
            value={confirmPassCreate}
            onChange={this.onChange}
            required="required"
          />
          <div
            onClick={() =>
              onConfirmCreateAccount(
                nicknameCreate,
                emailCreate,
                passwordCreate,
                confirmPassCreate
              )
            }
          >
            <Button text={<span>{create}</span>} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreateCard;
