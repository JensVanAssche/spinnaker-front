import api from './api';

export const GET_STANDINGS = 'GET_STANDINGS';
export const GET_STANDINGS_REJECTED = 'GET_STANDINGS_REJECTED';
export const GET_STANDINGS_PENDING = 'GET_STANDINGS_PENDING';
export const GET_STANDINGS_FULFILLED = 'GET_STANDINGS_FULFILLED';

export function getStandings(type) {
  return {
    type: GET_STANDINGS,
    payload: api.getStandings(type),
  };
}
