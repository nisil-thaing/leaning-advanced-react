import React, { Component } from 'react';

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
