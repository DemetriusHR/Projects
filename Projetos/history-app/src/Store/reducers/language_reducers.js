import {
  LANGUAGE_ENGLISH, LANGUAGE_ESPANOL, LANGUAGE_PORTUGUES, CREATE_ACCOUNT, OUT_LOGIN
} from '../actions/actions_types';

const initialState = {
  language: 'English',
  createAccount: false
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_ENGLISH:
      return {
        ...state,
        language: 'English'
      };

    case LANGUAGE_ESPANOL:
      return {
        ...state,
        language: 'Español'
      };

    case LANGUAGE_PORTUGUES:
      return {
        ...state,
        language: 'Português'
      };

    case CREATE_ACCOUNT:
      return {
        ...state,
        createAccount: true
      };

    case OUT_LOGIN:
      return {
        ...state,
        createAccount: false
      };

    default:
      return state;
  }
};

export default languageReducer;
