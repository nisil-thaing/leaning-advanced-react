import { createSelector } from 'reselect';

const getDemoDataReducerData = state => state.demoDataReducer.data;
const getAuthorById = (state, authorId) => authorId;

export const getArticles = createSelector(
  getDemoDataReducerData,
  rawData => mapIntoObject(rawData.articles)
);

export const getAuthors = createSelector(
  getDemoDataReducerData,
  rawData => mapIntoObject(rawData.authors)
);

export const getAuthorByAuthorId = createSelector(
  getDemoDataReducerData,
  getAuthorById,
  (rawData, authorId) => mapIntoObject(rawData.authors)[authorId]
);

function mapIntoObject(arr = []) {
  return arr.reduce((acc, curr) => {
    if (!curr.id) return;

    acc[curr.id] = curr;
    return acc;
  }, {});
}
