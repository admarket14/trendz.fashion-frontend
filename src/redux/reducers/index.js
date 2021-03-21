import { combineReducers } from 'redux';
import auth from './authReducer';
import homeStates from './homeReducer';
import language from './languageReducer';
import product from './productReducer';
import cart from './cartReducer';

export default combineReducers({ auth, homeStates, language, product, cart });
