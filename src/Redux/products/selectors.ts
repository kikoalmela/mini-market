import { RootState } from 'Redux/types';
import { createSelector } from 'reselect';
import { Product } from './types';

const stateSelector = (store: RootState) => store.products;

export const selectAllProducts = createSelector(stateSelector, state =>
  (Object.values(state.allById) as Product[]).filter(product => !!product),
);

export const selectCartProducts = createSelector(stateSelector, state =>
  state.cart
    .reduce((acc, id) => {
      const product = state.allById[id];
      if (!acc.includes(product)) {
        acc.push(product);
      }
      return acc;
    }, [] as Product[])
    .filter(product => !!product),
);
