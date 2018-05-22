import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import App from 'app/components/App';
import { rootReducer } from 'app/stores';

const initialData = window.initializeData || {
  articles: [],
  authors: []
};

const sagaMiddleware = createSagaMiddleware();
// Defining middleware list, could be handle this list by the environment, while need not the logger middleware on the production environment
const middlewares = [logger, sagaMiddleware];
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <App initialData={ initialData } />
  </Provider>,
  document.getElementById('root')
);
