import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { LOGOUT, USER_LOADED } from '../type';
import baseUrl from '../../config/baseUrl';
import setAuthToken from '../../utils/setAuthToken';

//Login User
const signUp = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/api/v1/auth/register`, data);
    const token = res.data.token;
    //Store jwtToken to localStorage
    localStorage.setItem('jwtToken', token);
    //load current User
    dispatch(loadUser());
  } catch (err) {}
};

//Login User
const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseUrl}/api/v1/auth/login`, data);
    const token = res.data.token;
    //Store jwtToken to localStorage
    localStorage.setItem('jwtToken', token);
    // setAuthToken(token);

    //load current User
    dispatch(loadUser());
  } catch (err) {}
};

//Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.jwtToken) {
    //Set Axios default header
    setAuthToken(localStorage.jwtToken);
    //Decode auth token
    const decoded = jwt_decode(localStorage.jwtToken);
    const res = await axios.get(`${baseUrl}/api/v1/user/me`);
    console.log(res.data);

    dispatch({ type: USER_LOADED, payload: res.data });
  } else {
    dispatch({ type: LOGOUT });
  }
};

//Logout user
export const logoutUser = () => (dispatch) => {
  //Remove token from local storage
  localStorage.removeItem('jwtToken');
  //Remove axios auth header for future requests
  setAuthToken(false);
  //Removing data from redux state
  dispatch({ type: LOGOUT });
};

const authAction = { login, loadUser, logoutUser, signUp };

export default authAction;
