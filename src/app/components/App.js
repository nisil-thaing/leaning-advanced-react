import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectors } from 'app/stores';
import ArticleList from './ArticleList';

class App extends Component {
  articleActions = {
    getAuthorByAuthorId: authorId => this.props.authorById(authorId)
  };

  render() {
    return (
      <ArticleList
        articles={ this.props.articles }
        articleActions={ this.articleActions }
      />
    );
  }
}

const mapStateToProps = state => {
  const {
    demoDataSelectors: {
      getArticles,
      getAuthors,
      getAuthorByAuthorId
    }
  } = selectors;

  return {
    articles: getArticles(state),
    authors: getAuthors(state),
    authorById: authorId => getAuthorByAuthorId(state, authorId)
  };
};

export default connect(mapStateToProps)(App);
