import { combineEpics } from 'redux-observable';
import { epic as productsEpic } from './products';

export default combineEpics(productsEpic);
