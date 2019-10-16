import api from './api';

export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_PLAYERS_REJECTED = 'GET_PLAYERS_REJECTED';
export const GET_PLAYERS_PENDING = 'GET_PLAYERS_PENDING';
export const GET_PLAYERS_FULFILLED = 'GET_PLAYERS_FULFILLED';

export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const UPDATE_PLAYER_REJECTED = 'UPDATE_PLAYER_REJECTED';
export const UPDATE_PLAYER_PENDING = 'UPDATE_PLAYER_PENDING';
export const UPDATE_PLAYER_FULFILLED = 'UPDATE_PLAYER_FULFILLED';

export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_PLAYER_REJECTED = 'ADD_PLAYER_REJECTED';
export const ADD_PLAYER_PENDING = 'ADD_PLAYER_PENDING';
export const ADD_PLAYER_FULFILLED = 'ADD_PLAYER_FULFILLED';

export const DELETE_PLAYER = 'DELETE_PLAYER';
export const DELETE_PLAYER_REJECTED = 'DELETE_PLAYER_REJECTED';
export const DELETE_PLAYER_PENDING = 'DELETE_PLAYER_PENDING';
export const DELETE_PLAYER_FULFILLED = 'DELETE_PLAYER_FULFILLED';

export function getPlayers(type) {
  return {
    type: GET_PLAYERS,
    payload: api.getPlayers(type),
  };
}

export function updatePlayer(data) {
  return {
    type: UPDATE_PLAYER,
    payload: api.updatePlayer(data),
  };
}

export function addPlayer(data) {
  return {
    type: ADD_PLAYER,
    payload: api.addPlayer(data),
  };
}

export function deletePlayer(id) {
  return {
    type: DELETE_PLAYER,
    payload: api.deletePlayer(id),
  };
}
