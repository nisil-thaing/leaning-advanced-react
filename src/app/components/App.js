import React, { Component } from 'react';

import { DataApi } from 'app/services';
import { testData as data } from 'app/raw-data';
import ArticleList from './ArticleList';

const DATA_API = new DataApi(data);

class App extends Component {
  articleActions = {
    getAuthorByAuthorId:
      authorId =>
        (authorId
          && this.state.authors
          && this.state.authors[authorId])
        || {}
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: DATA_API.fetchArticles(),
      authors: DATA_API.fetchAuthors()
    };
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
