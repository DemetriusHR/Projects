import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageInitialWrapper from './pageInitialStyled';
import Button from '../../Components/Buttons/ButtonOne';
import ChangeLanguage from '../../Components/ChangeLanguage';
import dataBase from '../../Utils/dataBase';

const PageInitial = (props) => {
  const { language } = props;
  return (
    <PageInitialWrapper>
      <ChangeLanguage />
      <h1>
        {dataBase[language].title}
      </h1>
      <h3>
        {dataBase[language].subtitle}
      </h3>
      <Link to="/login">
        <Button text={dataBase[language].buttonText} />
      </Link>
    </PageInitialWrapper>
  );
};

const mapStateToProps = state => {
  return {
    language: state.language.language
  };
};

export default connect(mapStateToProps)(PageInitial);
