import { ProductsAction } from './products';
import { ProductsState } from './products';

export type RootAction = ProductsAction;

export interface RootState {
  products: ProductsState;
}
