import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { DemoDataService } from 'app/services';
import App from 'app/components/App';

const demoDataService = new DemoDataService();

const serverRenderer = async () => {
  try {
    const initialData = await demoDataService.fetchDemoData();

    return {
      initializeMarkup: ReactDOMServer.renderToString(
        <App initialData={ initialData } />
      ),
      initializeData: initialData,
      title: 'Advanced React App'
    };
  } catch(err) {
    return null;
  }
};

export default serverRenderer;
