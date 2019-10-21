import { createSelector } from 'reselect';

const selectNode = state => state.standings;

export const selectStandings = createSelector(
  selectNode,
  node => node.data
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
