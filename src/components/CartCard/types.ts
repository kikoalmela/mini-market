import { PayloadActionCreator } from 'typesafe-actions';

export type Props = {
  id: number;
  name: string;
  img: string;
  price: number;
  removeFromCart: PayloadActionCreator<'products/REMOVE_FROM_CART', number>;
};
