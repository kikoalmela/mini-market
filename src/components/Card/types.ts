import { PayloadActionCreator } from 'typesafe-actions';

export type Props = {
  id: number;
  name: string;
  img: string;
  price: number;
  addToCart: PayloadActionCreator<'products/ADD_TO_CART', number>;
};
