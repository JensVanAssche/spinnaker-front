import api from './api';

export const GET_NEWS = 'GET_NEWS';
export const GET_NEWS_REJECTED = 'GET_NEWS_REJECTED';
export const GET_NEWS_PENDING = 'GET_NEWS_PENDING';
export const GET_NEWS_FULFILLED = 'GET_NEWS_FULFILLED';

export const GET_ARTICLE = 'GET_ARTICLE';
export const GET_ARTICLE_REJECTED = 'GET_ARTICLE_REJECTED';
export const GET_ARTICLE_PENDING = 'GET_ARTICLE_PENDING';
export const GET_ARTICLE_FULFILLED = 'GET_ARTICLE_FULFILLED';

export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const UPDATE_ARTICLE_REJECTED = 'UPDATE_ARTICLE_REJECTED';
export const UPDATE_ARTICLE_PENDING = 'UPDATE_ARTICLE_PENDING';
export const UPDATE_ARTICLE_FULFILLED = 'UPDATE_ARTICLE_FULFILLED';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const ADD_ARTICLE_REJECTED = 'ADD_ARTICLE_REJECTED';
export const ADD_ARTICLE_PENDING = 'ADD_ARTICLE_PENDING';
export const ADD_ARTICLE_FULFILLED = 'ADD_ARTICLE_FULFILLED';

export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DELETE_ARTICLE_REJECTED = 'DELETE_ARTICLE_REJECTED';
export const DELETE_ARTICLE_PENDING = 'DELETE_ARTICLE_PENDING';
export const DELETE_ARTICLE_FULFILLED = 'DELETE_ARTICLE_FULFILLED';

export function getNews(offset) {
  return {
    type: GET_NEWS,
    payload: api.getNews(offset),
  };
}

export function getLatest() {
  return {
    type: GET_NEWS,
    payload: api.getLatest(),
  };
}

export function getArticle(id) {
  return {
    type: GET_ARTICLE,
    payload: api.getArticle(id),
  };
}

export function updateArticle(id, body) {
  return {
    type: UPDATE_ARTICLE,
    payload: api.updateArticle(id, body),
  };
}

export function addArticle(body) {
  return {
    type: ADD_ARTICLE,
    payload: api.addArticle(body),
  };
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: api.deleteArticle(id),
  };
}