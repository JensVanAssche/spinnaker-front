import { createSelector } from 'reselect';

const selectNode = state => state.auth;

export const selectIsLoggedIn = createSelector(
  selectNode,
  node => node.isLoggedIn,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);

export const selectError = createSelector(
  selectNode,
  node => node.error,
);
