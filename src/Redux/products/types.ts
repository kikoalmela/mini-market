import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

type Show = {
  id: number;
  name: string;
  image: { medium: string; original: string };
};

type ResponseElement = {
  score: number;
  show: Show;
};

export type Response = ResponseElement[];

export type Product = {
  id: number;
  name: string;
  img: string;
  price: number;
};

export interface ById<T> {
  [key: number]: T;
}

export type ProductsState = {
  allProducts: Response;
  allIds: number[];
  allById: ById<Product>;
  cart: Product['id'][];
};

export type ProductsAction = ActionType<typeof actions>;
