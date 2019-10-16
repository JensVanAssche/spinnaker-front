import api from './api';

export const GET_NEWS = 'GET_NEWS';
export const GET_NEWS_REJECTED = 'GET_NEWS_REJECTED';
export const GET_NEWS_PENDING = 'GET_NEWS_PENDING';
export const GET_NEWS_FULFILLED = 'GET_NEWS_FULFILLED';

export function getNews(offset) {
  return {
    type: GET_NEWS,
    payload: api.getNews(offset),
  };
}
