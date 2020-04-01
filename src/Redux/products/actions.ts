import { createAsyncAction, createAction } from 'typesafe-actions';

export const getProductsAction = createAsyncAction(
  'products/PRODUCTS_REQUEST',
  'products/PRODUCTS_SUCCESS',
  'products/PRODUCTS_FAILURE',
)<undefined, any, Error>();

export const addToCart = createAction('products/ADD_TO_CART')<number>();

export const removeFromCart = createAction('products/REMOVE_FROM_CART')<
  number
>();
