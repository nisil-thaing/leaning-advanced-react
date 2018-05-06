import { DataApi } from 'app/services';
import { testData as data } from 'app/raw-data';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.fetchArticles();
    const firstArticleId = data.articles[0].id;
    const firstArticleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(firstArticleId);
    expect(articles[firstArticleId].title).toBe(firstArticleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = api.fetchAuthors();
    const firstAuthorId = data.authors[0].id;
    const firstAuthorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(firstAuthorId);
    expect(authors[firstAuthorId].firstName).toBe(firstAuthorFirstName);
  });
});
