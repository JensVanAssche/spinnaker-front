import { createSelector } from 'reselect';

const selectNode = state => state.publications;

export const selectPublications = createSelector(
  selectNode,
  node => node.data,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
