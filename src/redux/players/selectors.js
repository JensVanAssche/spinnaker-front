import { createSelector } from 'reselect';

const selectNode = state => state.players;

export const selectPlayers = createSelector(
  selectNode,
  node => node.data,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
