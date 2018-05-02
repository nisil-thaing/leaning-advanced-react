import React from 'react';
import renderer from 'react-test-renderer';

import ArticleList from '../ArticleList';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
      c: { id: 'c' }
    },
    articleActions: {
      getAuthorByAuthorId: jest.fn(() => ({}))
    }
  };

  it('renderer correctly', () => {
    const tree  = renderer.create(
      <ArticleList
        { ...testProps }
      />
    ).toJSON();

    expect(tree.children.length).toBe(3);

    expect(tree).toMatchSnapshot();
  });
});
