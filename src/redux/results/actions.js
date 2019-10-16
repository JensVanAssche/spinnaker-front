import api from './api';

export const GET_RESULTS = 'GET_RESULTS';
export const GET_RESULTS_REJECTED = 'GET_RESULTS_REJECTED';
export const GET_RESULTS_PENDING = 'GET_RESULTS_PENDING';
export const GET_RESULTS_FULFILLED = 'GET_RESULTS_FULFILLED';

export function getResults(type) {
  return {
    type: GET_RESULTS,
    payload: api.getResults(type),
  };
}
