import axios from 'axios';

class ApiClient {
  async get(
    url = '',
    options = {
      params: {}
    }
  ) {
    try {
      const res = await axios.get(url, options);
      return res;
    } catch(err) {
      throw err;
    }
  }
}

export default ApiClient;
