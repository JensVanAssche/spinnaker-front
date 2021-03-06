import { createSelector } from 'reselect';

const selectNode = state => state.results;

export const selectResults = createSelector(
  selectNode,
  node => node.data,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
