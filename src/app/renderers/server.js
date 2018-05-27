import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import App from 'app/components/App';
import { configureStore, actions, sagas } from 'app/stores';

const store = configureStore();

store.runSaga(sagas.demoDataSaga);
store.dispatch(actions.DEMO_DATA_ACTIONS.fetchDemoData());

const serverRenderer = () => {
  const initialState = store.getState();

  return {
    initializeMarkup: ReactDOMServer.renderToString(
      <Provider store={ store }>
        <App />
      </Provider>
    ),
    initialState,
    title: 'Advanced React App'
  };
};

export default serverRenderer;
