import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/components/App';

const initialData = window.initialData || {
  articles: [],
  authors: []
};

ReactDOM.hydrate(
  <App initialData={ initialData } />,
  document.getElementById('root')
);
