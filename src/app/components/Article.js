import React from 'react';

const convertShowingDate = dateStr => new Date(dateStr).toDateString();

const Article = props => {
  const { article, actions: { getAuthorByAuthorId } } = props;
  const author = (article && getAuthorByAuthorId(article.authorId)) || {};

  return (
    <div className="Article">
      <div className="title">{ article.title }</div>
      <div className="timestamp">
        { convertShowingDate(article.date) }
      </div>
      <div className="author">
        <a href={ author.website }>
          { author.firstName } { author.lastName }
        </a>
      </div>
      <div className="body">{ article.body }</div>
    </div>
  );
};

export default Article;
