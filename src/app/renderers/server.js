import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, actions, sagas } from 'app/stores';
import App from 'app/components/App';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(sagas.demoDataSaga);
store.dispatch(actions.DEMO_DATA_ACTIONS.fetchDemoData());

const serverRenderer = () => {
  const state = store.getState();
  const {
    demoDataReducer: {
      data: initializeData = null
    } = {}
  } = state || {};

  return {
    initializeMarkup: ReactDOMServer.renderToString(
      <App initialData={ initializeData } />
    ),
    initializeData,
    title: 'Advanced React App'
  };
};

export default serverRenderer;
