import { createSelector } from 'reselect';

const selectNode = state => state.calendar;

export const selectCalendar = createSelector(
  selectNode,
  node => node.data && node.data.sort((a, b) => a.date - b.date),
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
