import React from 'react';

import Button from '../../../Components/Buttons/ButtonOne';

const CreateCard = ({ data }) => {
  const {
    createAccount, nickname, email, password, confirmPass, create
  } = data;

  return (
    <React.Fragment>
      <div className="header-card header-card-create">
        <h1>
          {createAccount}
        </h1>
      </div>
      <div className="content-card content-card-create">
        <p>{nickname}</p>
        <input type="text" required="required" />
        <p>{email}</p>
        <input type="email" required="required" />
        <p>{password}</p>
        <input type="password" required="required" />
        <p>{confirmPass}</p>
        <input type="password" required="required" />
        <Button text={<span>{create}</span>} />
      </div>
    </React.Fragment>
  );
};

export default CreateCard;
