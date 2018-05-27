import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleList from './ArticleList';

class App extends Component {
  articleActions = {
    getAuthorByAuthorId:
      authorId =>
        (authorId
          && this.props.authors
          && this.props.authors[authorId])
        || {}
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

const mapStateToProps = ({
  demoDataReducer: {
    data: {
      articles,
      authors
    }
  }
}) => ({ articles, authors });

export default connect(mapStateToProps)(App);
