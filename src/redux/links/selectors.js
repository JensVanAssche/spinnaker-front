import { createSelector } from 'reselect';

const selectNode = state => state.links;

export const selectLinks = createSelector(
  selectNode,
  node => node.data && node.data.sort((a, b) =>
    a.createdAt.toLowerCase() > b.createdAt.toLowerCase() ? 1 : -1,
  ),
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
