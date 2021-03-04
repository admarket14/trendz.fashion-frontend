import { combineReducers } from 'redux';
import language from './languageReducer';
import product from './productReducer';

export default combineReducers({ language, product });
