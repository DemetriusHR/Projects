import React, { useContext } from 'react';
import ChangeLanguageWrapper from './ChangeLanguageStyle';
import { onCompare } from '../../Utils/FunctionsAux';
import { LanguageContext } from '../../Context';

const ChangeLanguage = ({ border }) => {
  const {
    language,
    actions: {
      changeLanguagueEnglish,
      changeLanguagueEspanol,
      changeLanguaguePortugues
    },
    dataBase: { titleChangeLanguage }
  } = useContext(LanguageContext);

  return (
    <div className="dont-select">
      <ChangeLanguageWrapper>
        <p className="title">{titleChangeLanguage}</p>
        <span
          className="language"
          style={{ borderBottom: `${onCompare(language, 'English', border)}` }}
          onClick={changeLanguagueEnglish}
        >
          English
        </span>
        <span
          className="language"
          style={{
            borderBottom: `${onCompare(language, 'Português', border)}`
          }}
          onClick={changeLanguaguePortugues}
        >
          Português
        </span>
        <span
          className="language"
          style={{ borderBottom: `${onCompare(language, 'Español', border)}` }}
          onClick={changeLanguagueEspanol}
        >
          Español
        </span>
      </ChangeLanguageWrapper>
    </div>
  );
};

export default ChangeLanguage;
