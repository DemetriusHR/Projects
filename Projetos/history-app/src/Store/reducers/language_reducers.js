import { LANGUAGE_ENGLISH, LANGUAGE_ESPANOL, LANGUAGE_PORTUGUES } from '../actions/actions_types';

const initialState = {
  language: 'English'
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

    default:
      return state;
  }
};

export default languageReducer;
