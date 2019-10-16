import { createSelector } from 'reselect';

const selectNode = state => state.content;

export const selectData = createSelector(
  selectNode,
  node => node.data,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
