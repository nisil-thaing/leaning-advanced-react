class DataApi {
  constructor(rawData) {
    this.rawData = rawData || [];
  }

  mapIntoObject(arr = []) {
    return arr.reduce((acc, curr) => {
      if (!curr.id) return;

      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  fetchArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  fetchAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
