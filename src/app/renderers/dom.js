import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from 'app/components/App';
import { configureStore } from '../stores';

const initialData = window.__PRELOADED_STATE__ || {
  articles: [],
  authors: []
};

delete window.__PRELOADED_STATE__;

const store = configureStore([logger]);

ReactDOM.hydrate(
  <Provider store={store}>
    <App initialData={ initialData } />
  </Provider>,
  document.getElementById('root')
);
