import api from './api';

export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_PLAYERS_REJECTED = 'GET_PLAYERS_REJECTED';
export const GET_PLAYERS_PENDING = 'GET_PLAYERS_PENDING';
export const GET_PLAYERS_FULFILLED = 'GET_PLAYERS_FULFILLED';

export function getPlayers(type) {
  return {
    type: GET_PLAYERS,
    payload: api.getPlayers(type),
  };
}
