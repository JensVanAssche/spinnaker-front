import { createSelector } from 'reselect';

const selectNode = state => state.content;

export const selectContent = createSelector(
  selectNode,
  node => node.content,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
