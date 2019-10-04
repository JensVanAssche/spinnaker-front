import api from './api';

export const CONTENT = 'CONTENT';
export const CONTENT_REJECTED = 'CONTENT_REJECTED';
export const CONTENT_PENDING = 'CONTENT_PENDING';
export const CONTENT_FULFILLED = 'CONTENT_FULFILLED';

export function getAll() {
  return {
    type: CONTENT,
    payload: api.getAll(),
  };
}
