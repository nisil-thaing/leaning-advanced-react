import { ApiClient } from 'app/common';

import config from 'app/config';

class DemoDataService {
  endpoint = `http://${ config.host }:${ config.port }/api/test-data`;
  apiClient = new ApiClient();

  fetchDemoData = async() => {
    try {
      const res = await this.apiClient.get(this.endpoint);
      const { data } = res;

      return data;
    } catch(err) {
      throw new Error(err);
    }
  }
}

export default DemoDataService;
