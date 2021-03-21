import { combineReducers } from 'redux';
import homeStates from './homeReducer';
import language from './languageReducer';
import product from './productReducer';
import cart from './cartReducer';

export default combineReducers({ homeStates, language, product, cart });
