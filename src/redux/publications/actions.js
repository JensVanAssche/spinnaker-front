import api from './api';

export const GET_PUBLICATIONS = 'GET_PUBLICATIONS';
export const GET_PUBLICATIONS_REJECTED = 'GET_PUBLICATIONS_REJECTED';
export const GET_PUBLICATIONS_PENDING = 'GET_PUBLICATIONS_PENDING';
export const GET_PUBLICATIONS_FULFILLED = 'GET_PUBLICATIONS_FULFILLED';

export function getPublications() {
  return {
    type: GET_PUBLICATIONS,
    payload: api.getPublications(),
  };
}
