import api from './api';

export const GET_CALENDAR = 'GET_CALENDAR';
export const GET_CALENDAR_REJECTED = 'GET_CALENDAR_REJECTED';
export const GET_CALENDAR_PENDING = 'GET_CALENDAR_PENDING';
export const GET_CALENDAR_FULFILLED = 'GET_CALENDAR_FULFILLED';

export function getCalendar(type) {
  return {
    type: GET_CALENDAR,
    payload: api.getCalendar(type),
  };
}
