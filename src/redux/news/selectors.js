import { createSelector } from 'reselect';

const selectNode = state => state.news;

export const selectNews = createSelector(
  selectNode,
  node => node.news && node.news.sort((a, b) =>
    a.createdAt.toLowerCase() < b.createdAt.toLowerCase() ? 1 : -1,
  )
);

export const selectArticle = createSelector(
  selectNode,
  node => node.article,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
