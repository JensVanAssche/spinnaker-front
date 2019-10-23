import { createSelector } from 'reselect';

const selectNode = state => state.players;

export const selectPlayers = createSelector(
  selectNode,
  node => node.data && node.data.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1,
  )
  && node.data.sort((a, b) =>
    a.subtitle.toLowerCase() > b.subtitle.toLowerCase() ? 1 : -1,
  ),
);

export const selectPlayersOrdered = createSelector(
  selectNode,
  node => node.data,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
