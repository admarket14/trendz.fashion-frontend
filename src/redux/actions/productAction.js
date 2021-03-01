import axios from 'axios';

import baseUrl from '../../config/baseUrl';
import { GET_PRODUCT, GET_PRODUCTS } from '../type';

const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/products`);
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (error) { }
};

const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/products/${id}`);
    dispatch({ type: GET_PRODUCT, payload: res.data });
  } catch (error) { }
};

const productAction = { getProducts, getProduct };
export default productAction;
