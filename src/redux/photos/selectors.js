import { createSelector } from 'reselect';

const selectNode = state => state.photos;

export const selectPhotos = createSelector(
  selectNode,
  node => node.data,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
