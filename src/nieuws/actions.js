import api from './api';

export const NEWS = 'NEWS';
export const NEWS_REJECTED = 'NEWS_REJECTED';
export const NEWS_PENDING = 'NEWS_PENDING';
export const NEWS_FULFILLED = 'NEWS_FULFILLED';

export function getAll() {
  return {
    type: NEWS,
    payload: api.getAll(),
  };
}
