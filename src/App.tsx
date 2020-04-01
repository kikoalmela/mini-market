import React, { FC } from 'react';
import './App.css';
import Routes from './containers/Routes';
import configureStore from './Redux';
import { Provider } from 'react-redux';

const store = configureStore();

const App: FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
