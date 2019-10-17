import { createSelector } from 'reselect';

const selectNode = state => state.calendar;

export const selectCalendar = createSelector(
  selectNode,
  node => node.data,
);

export const selectLoading = createSelector(
  selectNode,
  node => node.loading,
);
