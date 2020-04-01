import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import { RootAction, RootState } from './types';
import { composeWithDevTools } from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState
>();

const isTest = process.env.NODE_ENV === 'test';
const isProd = process.env.NODE_ENV === 'production';

export default () => {
  const store = createStore(
    rootReducer,
    !isProd && !isTest
      ? composeWithDevTools(applyMiddleware(epicMiddleware))
      : applyMiddleware(epicMiddleware),
  );

  epicMiddleware.run(rootEpic);

  return store;
};
