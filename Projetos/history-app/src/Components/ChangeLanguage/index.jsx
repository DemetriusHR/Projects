import React from 'react';
import { connect } from 'react-redux';

import ChangeLanguageWrapper from './ChangeLanguageStyle';
import dataBase from '../../Utils/dataBase';
import { onCompare } from '../../Utils/FunctionsAux';
import { languageEnglish, languageEspanol, languagePortugues } from '../../Store/actions';

const ChangeLanguage = (props) => {
  const { language } = props;
  return (
    <ChangeLanguageWrapper>
      <p className="title">
        {dataBase[language].titleChangeLanguage}
      </p>
      <span
        className="language"
        style={{ border: `${onCompare(language, 'English')}` }}
        onClick={() => props.languageEnglish()}
      >
        English
      </span>
      <span
        className="language"
        style={{ border: `${onCompare(language, 'Português')}` }}
        onClick={() => props.languagePortugues()}
      >
        Português
      </span>
      <span
        className="language"
        style={{ border: `${onCompare(language, 'Español')}` }}
        onClick={() => props.languageEspanol()}
      >
        Español
      </span>
    </ChangeLanguageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.language.language
  };
};
export default connect(
  mapStateToProps,
  {
    languageEnglish,
    languageEspanol,
    languagePortugues
  })(ChangeLanguage);
