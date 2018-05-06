import React, { Component } from 'react';

import { DataApi } from 'app/services';
import { ApiClient } from 'app/common';
import ArticleList from './ArticleList';

class App extends Component {
  articleActions = {
    getAuthorByAuthorId:
      authorId =>
        (authorId
          && this.state.authors
          && this.state.authors[authorId])
        || {}
  };
  apiClient = new ApiClient;

  constructor(props) {
    super(props);

    const {
      initialData: {
        articles = [],
        authors = []
      } = {}
    } = this.props || {};

    this.state = {
      articles,
      authors
    };
  }

  async componentDidMount() {
    try {
      const res = await this.apiClient.get('/api/test-data');
      const data = res.data;
      const api = new DataApi(data);

      this.setState({
        articles: api.fetchArticles(),
        authors: api.fetchAuthors()
      });
    } catch(err) {
      // TODO
    }
  }

  render() {
    return (
      <ArticleList
        articles={ this.state.articles }
        articleActions={ this.articleActions }
      />
    );
  }
}

export default App;
