import api from './api';

export const GET_RESULTS = 'GET_RESULTS';
export const GET_RESULTS_REJECTED = 'GET_RESULTS_REJECTED';
export const GET_RESULTS_PENDING = 'GET_RESULTS_PENDING';
export const GET_RESULTS_FULFILLED = 'GET_RESULTS_FULFILLED';

export const UPDATE_PDF_RESULT = 'UPDATE_PDF_RESULT';
export const UPDATE_PDF_RESULT_REJECTED = 'UPDATE_PDF_RESULT_REJECTED';
export const UPDATE_PDF_RESULT_PENDING = 'UPDATE_PDF_RESULT_PENDING';
export const UPDATE_PDF_RESULT_FULFILLED = 'UPDATE_PDF_RESULT_FULFILLED';

export const UPDATE_TOURNAMENT_RESULT = 'UPDATE_TOURNAMENT_RESULT';
export const UPDATE_TOURNAMENT_RESULT_REJECTED = 'UPDATE_TOURNAMENT_RESULT_REJECTED';
export const UPDATE_TOURNAMENT_RESULT_PENDING = 'UPDATE_TOURNAMENT_RESULT_PENDING';
export const UPDATE_TOURNAMENT_RESULT_FULFILLED = 'UPDATE_TOURNAMENT_RESULT_FULFILLED';

export const UPDATE_SCORE_RESULT = 'UPDATE_SCORE_RESULT';
export const UPDATE_SCORE_RESULT_REJECTED = 'UPDATE_SCORE_RESULT_REJECTED';
export const UPDATE_SCORE_RESULT_PENDING = 'UPDATE_SCORE_RESULT_PENDING';
export const UPDATE_SCORE_RESULT_FULFILLED = 'UPDATE_SCORE_RESULT_FULFILLED';

export const ADD_PDF_RESULT = 'ADD_PDF_RESULT';
export const ADD_PDF_RESULT_REJECTED = 'ADD_PDF_RESULT_REJECTED';
export const ADD_PDF_RESULT_PENDING = 'ADD_PDF_RESULT_PENDING';
export const ADD_PDF_RESULT_FULFILLED = 'ADD_PDF_RESULT_FULFILLED';

export const ADD_TOURNAMENT_RESULT = 'ADD_TOURNAMENT_RESULT';
export const ADD_TOURNAMENT_RESULT_REJECTED = 'ADD_TOURNAMENT_RESULT_REJECTED';
export const ADD_TOURNAMENT_RESULT_PENDING = 'ADD_TOURNAMENT_RESULT_PENDING';
export const ADD_TOURNAMENT_RESULT_FULFILLED = 'ADD_TOURNAMENT_RESULT_FULFILLED';

export const ADD_SCORE_RESULT = 'ADD_SCORE_RESULT';
export const ADD_SCORE_RESULT_REJECTED = 'ADD_SCORE_RESULT_REJECTED';
export const ADD_SCORE_RESULT_PENDING = 'ADD_SCORE_RESULT_PENDING';
export const ADD_SCORE_RESULT_FULFILLED = 'ADD_SCORE_RESULT_FULFILLED';

export const DELETE_PDF_RESULT = 'DELETE_PDF_RESULT';
export const DELETE_PDF_RESULT_REJECTED = 'DELETE_PDF_RESULT_REJECTED';
export const DELETE_PDF_RESULT_PENDING = 'DELETE_PDF_RESULT_PENDING';
export const DELETE_PDF_RESULT_FULFILLED = 'DELETE_PDF_RESULT_FULFILLED';

export const DELETE_TOURNAMENT_RESULT = 'DELETE_TOURNAMENT_RESULT';
export const DELETE_TOURNAMENT_RESULT_REJECTED = 'DELETE_TOURNAMENT_RESULT_REJECTED';
export const DELETE_TOURNAMENT_RESULT_PENDING = 'DELETE_TOURNAMENT_RESULT_PENDING';
export const DELETE_TOURNAMENT_RESULT_FULFILLED = 'DELETE_TOURNAMENT_RESULT_FULFILLED';

export const DELETE_SCORE_RESULT = 'DELETE_SCORE_RESULT';
export const DELETE_SCORE_RESULT_REJECTED = 'DELETE_SCORE_RESULT_REJECTED';
export const DELETE_SCORE_RESULT_PENDING = 'DELETE_SCORE_RESULT_PENDING';
export const DELETE_SCORE_RESULT_FULFILLED = 'DELETE_SCORE_RESULT_FULFILLED';

export function getResults(type) {
  return {
    type: GET_RESULTS,
    payload: api.getResults(type),
  };
}

export function updatePdfResult(data) {
  return {
    type: UPDATE_PDF_RESULT,
    payload: api.updatePdfResult(data),
  };
}

export function updateTournamentResult(data) {
  return {
    type: UPDATE_TOURNAMENT_RESULT,
    payload: api.updateTournamentResult(data),
  };
}

export function updateScoreResult(data) {
  return {
    type: UPDATE_SCORE_RESULT,
    payload: api.updateScoreResult(data),
  };
}

export function addPdfResult(data) {
  return {
    type: ADD_PDF_RESULT,
    payload: api.addPdfResult(data),
  };
}

export function addTournamentResult(data) {
  return {
    type: ADD_TOURNAMENT_RESULT,
    payload: api.addTournamentResult(data),
  };
}

export function addScoreResult(data) {
  return {
    type: ADD_SCORE_RESULT,
    payload: api.addScoreResult(data),
  };
}

export function deletePdfResult(id) {
  return {
    type: DELETE_PDF_RESULT,
    payload: api.deletePdfResult(id),
  };
}

export function deleteTournamentResult(id) {
  return {
    type: DELETE_TOURNAMENT_RESULT,
    payload: api.deleteTournamentResult(id),
  };
}

export function deleteScoreResult(id) {
  return {
    type: DELETE_SCORE_RESULT,
    payload: api.deleteScoreResult(id),
  };
}