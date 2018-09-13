import { createStore, combineReducers } from 'redux';
import languageReducer from './reducers/language_reducers';

const rootReducer = combineReducers({
  language: languageReducer,
});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
