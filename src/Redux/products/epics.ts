import { combineEpics, Epic } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { RootAction, RootState } from '../types';
import { getProductsAction } from './actions';
import { Response, Product } from './types';

export const getProductsEpic: Epic<RootAction, RootAction, RootState, any> = (
  action$,
  state$,
) =>
  action$.pipe(
    filter(isActionOf(getProductsAction.request)),
    mergeMap(() =>
      ajax
        .getJSON<Response>('http://api.tvmaze.com/search/shows?q=doctor')
        .pipe(
          mergeMap(products => {
            const allIds: number[] = products.map(el => el.show.id);
            const allById = products.reduce((acc, el) => {
              const { id, name, image } = el.show;
              acc[id] = {
                id: id,
                name,
                img: image.medium,
                price: el.score,
              };
              return acc;
            }, {} as { [id: number]: Product });
            return [
              getProductsAction.success({
                allIds,
                allById,
                allProducts: products,
              }),
            ];
          }),
          catchError(e => [getProductsAction.failure(e)]),
        ),
    ),
  );

export default combineEpics(getProductsEpic);
