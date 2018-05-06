import React from 'react';
import ReactDOMServer from 'react-dom/server';

import config from 'app/config';
import { ApiClient } from 'app/common';
import { DataApi } from 'app/services';
import App from 'app/components/App';

const apiClient = new ApiClient();

const serverRenderer = async () => {
  try {
    const res
      = await apiClient.get(`http://${ config.host }:${ config.port }/api/test-data`);
    const { data } = res;
    const api = new DataApi(data);
    const initialData = {
      articles: api.fetchArticles(),
      authors: api.fetchAuthors()
    };

    return ReactDOMServer.renderToString(
      <App initialData={ initialData } />
    );
  } catch(err) {
    return null;
  }
};

export default serverRenderer;
