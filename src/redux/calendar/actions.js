import api from './api';

export const GET_CALENDAR = 'GET_CALENDAR';
export const GET_CALENDAR_REJECTED = 'GET_CALENDAR_REJECTED';
export const GET_CALENDAR_PENDING = 'GET_CALENDAR_PENDING';
export const GET_CALENDAR_FULFILLED = 'GET_CALENDAR_FULFILLED';

export const UPDATE_CALENDAR = 'UPDATE_CALENDAR';
export const UPDATE_CALENDAR_REJECTED = 'UPDATE_CALENDAR_REJECTED';
export const UPDATE_CALENDAR_PENDING = 'UPDATE_CALENDAR_PENDING';
export const UPDATE_CALENDAR_FULFILLED = 'UPDATE_CALENDAR_FULFILLED';

export const ADD_CALENDAR = 'ADD_CALENDAR';
export const ADD_CALENDAR_REJECTED = 'ADD_CALENDAR_REJECTED';
export const ADD_CALENDAR_PENDING = 'ADD_CALENDAR_PENDING';
export const ADD_CALENDAR_FULFILLED = 'ADD_CALENDAR_FULFILLED';

export const DELETE_CALENDAR = 'DELETE_CALENDAR';
export const DELETE_CALENDAR_REJECTED = 'DELETE_CALENDAR_REJECTED';
export const DELETE_CALENDAR_PENDING = 'DELETE_CALENDAR_PENDING';
export const DELETE_CALENDAR_FULFILLED = 'DELETE_CALENDAR_FULFILLED';

export function getCalendar(type) {
  return {
    type: GET_CALENDAR,
    payload: api.getCalendar(type),
  };
}

export function updateCalendar(data) {
  return {
    type: UPDATE_CALENDAR,
    payload: api.updateCalendar(data),
  };
}

export function addCalendar(data) {
  return {
    type: ADD_CALENDAR,
    payload: api.addCalendar(data),
  };
}

export function deleteCalendar(id) {
  return {
    type: DELETE_CALENDAR,
    payload: api.deleteCalendar(id),
  };
}
