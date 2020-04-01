import { getType } from 'typesafe-actions';
import { addToCart, getProductsAction, removeFromCart } from './actions';
import { ProductsAction, ProductsState } from './types';

const initialState: ProductsState = {
  allProducts: [],
  allIds: [],
  allById: {},
  cart: [],
};

export default (state = initialState, action: ProductsAction) => {
  switch (action.type) {
    case getType(getProductsAction.success): {
      const { allById, allProducts, allIds } = action.payload;
      return {
        ...state,
        allById,
        allProducts,
        allIds,
      };
    }
    case getType(addToCart): {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case getType(removeFromCart): {
      return {
        ...state,
        cart: state.cart.filter(id => id !== action.payload),
      };
    }
    case getType(getProductsAction.request):
    case getType(getProductsAction.failure):
    default:
      return state;
  }
};
