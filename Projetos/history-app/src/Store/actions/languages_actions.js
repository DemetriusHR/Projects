import {
  LANGUAGE_ENGLISH, LANGUAGE_ESPANOL, LANGUAGE_PORTUGUES, CREATE_ACCOUNT, OUT_LOGIN
} from './actions_types';

export const languageEnglish = () => {
  return {
    type: LANGUAGE_ENGLISH
  };
};

export const languageEspanol = () => {
  return {
    type: LANGUAGE_ESPANOL
  };
};

export const languagePortugues = () => {
  return {
    type: LANGUAGE_PORTUGUES
  };
};

export const onCreateAccount = () => {
  return {
    type: CREATE_ACCOUNT
  };
};

export const onOutLogin = () => {
  return {
    type: OUT_LOGIN
  };
};
