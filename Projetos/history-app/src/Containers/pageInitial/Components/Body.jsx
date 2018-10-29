import React, { Fragment, useContext } from 'react';

import Button from '../../../Components/Buttons/ButtonOne';
import ChangeLanguage from '../../../Components/ChangeLanguage';
import { LanguageContext } from '../../../Context';

const Body = () => {
  const {
    dataBase: { title, subtitle, buttonText }
  } = useContext(LanguageContext);

  return (
    <Fragment>
      <ChangeLanguage />
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <Button text={buttonText} link="/login" />
    </Fragment>
  );
};

export default Body;
