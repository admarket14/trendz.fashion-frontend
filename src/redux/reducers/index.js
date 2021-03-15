import { combineReducers } from 'redux';
import language from './languageReducer';
import product from './productReducer';
import cart from './cartReducer';

export default combineReducers({ language, product, cart });
