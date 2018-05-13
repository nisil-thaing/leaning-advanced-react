import { ApiClient } from 'app/common';
import { DataApi } from 'app/models';

import config from 'app/config';

class DemoDataService {
  endpoint = `http://${ config.host }:${ config.port }/api/test-data`;
  apiClient = new ApiClient();

  fetchDemoData = async() => {
    try {
      const res = await this.apiClient.get(this.endpoint);
      const { data } = res;
      const dataApi = new DataApi(data);

      return {
        articles: dataApi.fetchArticles(),
        authors: dataApi.fetchAuthors()
      };
    } catch(err) {
      throw new Error(err);
    }
  }
}

export default DemoDataService;