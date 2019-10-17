import api from './api';

export const GET_STANDINGS = 'GET_STANDINGS';
export const GET_STANDINGS_REJECTED = 'GET_STANDINGS_REJECTED';
export const GET_STANDINGS_PENDING = 'GET_STANDINGS_PENDING';
export const GET_STANDINGS_FULFILLED = 'GET_STANDINGS_FULFILLED';

export const UPDATE_PDF_STANDING = 'UPDATE_PDF_STANDING';
export const UPDATE_PDF_STANDING_REJECTED = 'UPDATE_PDF_STANDING_REJECTED';
export const UPDATE_PDF_STANDING_PENDING = 'UPDATE_PDF_STANDING_PENDING';
export const UPDATE_PDF_STANDING_FULFILLED = 'UPDATE_PDF_STANDING_FULFILLED';

export const UPDATE_TOURNAMENT_STANDING = 'UPDATE_TOURNAMENT_STANDING';
export const UPDATE_TOURNAMENT_STANDING_REJECTED = 'UPDATE_TOURNAMENT_STANDING_REJECTED';
export const UPDATE_TOURNAMENT_STANDING_PENDING = 'UPDATE_TOURNAMENT_STANDING_PENDING';
export const UPDATE_TOURNAMENT_STANDING_FULFILLED = 'UPDATE_TOURNAMENT_STANDING_FULFILLED';

export const UPDATE_SCORE_STANDING = 'UPDATE_SCORE_STANDING';
export const UPDATE_SCORE_STANDING_REJECTED = 'UPDATE_SCORE_STANDING_REJECTED';
export const UPDATE_SCORE_STANDING_PENDING = 'UPDATE_SCORE_STANDING_PENDING';
export const UPDATE_SCORE_STANDING_FULFILLED = 'UPDATE_SCORE_STANDING_FULFILLED';

export const ADD_PDF_STANDING = 'ADD_PDF_STANDING';
export const ADD_PDF_STANDING_REJECTED = 'ADD_PDF_STANDING_REJECTED';
export const ADD_PDF_STANDING_PENDING = 'ADD_PDF_STANDING_PENDING';
export const ADD_PDF_STANDING_FULFILLED = 'ADD_PDF_STANDING_FULFILLED';

export const ADD_TOURNAMENT_STANDING = 'ADD_TOURNAMENT_STANDING';
export const ADD_TOURNAMENT_STANDING_REJECTED = 'ADD_TOURNAMENT_STANDING_REJECTED';
export const ADD_TOURNAMENT_STANDING_PENDING = 'ADD_TOURNAMENT_STANDING_PENDING';
export const ADD_TOURNAMENT_STANDING_FULFILLED = 'ADD_TOURNAMENT_STANDING_FULFILLED';

export const ADD_SCORE_STANDING = 'ADD_SCORE_STANDING';
export const ADD_SCORE_STANDING_REJECTED = 'ADD_SCORE_STANDING_REJECTED';
export const ADD_SCORE_STANDING_PENDING = 'ADD_SCORE_STANDING_PENDING';
export const ADD_SCORE_STANDING_FULFILLED = 'ADD_SCORE_STANDING_FULFILLED';

export const DELETE_PDF_STANDING = 'DELETE_PDF_STANDING';
export const DELETE_PDF_STANDING_REJECTED = 'DELETE_PDF_STANDING_REJECTED';
export const DELETE_PDF_STANDING_PENDING = 'DELETE_PDF_STANDING_PENDING';
export const DELETE_PDF_STANDING_FULFILLED = 'DELETE_PDF_STANDING_FULFILLED';

export const DELETE_TOURNAMENT_STANDING = 'DELETE_TOURNAMENT_STANDING';
export const DELETE_TOURNAMENT_STANDING_REJECTED = 'DELETE_TOURNAMENT_STANDING_REJECTED';
export const DELETE_TOURNAMENT_STANDING_PENDING = 'DELETE_TOURNAMENT_STANDING_PENDING';
export const DELETE_TOURNAMENT_STANDING_FULFILLED = 'DELETE_TOURNAMENT_STANDING_FULFILLED';

export const DELETE_SCORE_STANDING = 'DELETE_SCORE_STANDING';
export const DELETE_SCORE_STANDING_REJECTED = 'DELETE_SCORE_STANDING_REJECTED';
export const DELETE_SCORE_STANDING_PENDING = 'DELETE_SCORE_STANDING_PENDING';
export const DELETE_SCORE_STANDING_FULFILLED = 'DELETE_SCORE_STANDING_FULFILLED';

export function getStandings(type) {
  return {
    type: GET_STANDINGS,
    payload: api.getStandings(type),
  };
}

export function updatePdfStanding(data) {
  return {
    type: UPDATE_PDF_STANDING,
    payload: api.updatePdfStanding(data),
  };
}

export function updateTournamentStanding(data) {
  return {
    type: UPDATE_TOURNAMENT_STANDING,
    payload: api.updateTournamentStanding(data),
  };
}

export function updateScoreStanding(data) {
  return {
    type: UPDATE_SCORE_STANDING,
    payload: api.updateScoreStanding(data),
  };
}

export function addPdfStanding(data) {
  return {
    type: ADD_PDF_STANDING,
    payload: api.addPdfStanding(data),
  };
}

export function addTournamentStanding(data) {
  return {
    type: ADD_TOURNAMENT_STANDING,
    payload: api.addTournamentStanding(data),
  };
}

export function addScoreStanding(data) {
  return {
    type: ADD_SCORE_STANDING,
    payload: api.addScoreStanding(data),
  };
}

export function deletePdfStanding(id) {
  return {
    type: DELETE_PDF_STANDING,
    payload: api.deletePdfStanding(id),
  };
}

export function deleteTournamentStanding(id) {
  return {
    type: DELETE_TOURNAMENT_STANDING,
    payload: api.deleteTournamentStanding(id),
  };
}

export function deleteScoreStanding(id) {
  return {
    type: DELETE_SCORE_STANDING,
    payload: api.deleteScoreStanding(id),
  };
}