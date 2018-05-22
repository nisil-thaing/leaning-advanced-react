import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'app/components/App';
import { configureStore, actions, sagas } from 'app/stores';

const store = configureStore();

store.runSaga(sagas.demoDataSaga);
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
